import {THREE} from './three-defs.js';
import {entity} from './entity.js';


export const ammojs_component = (() => {

  // https://pybullet.org/Bullet/BulletFull/btCollisionObject_8h_source.html#l00131
  const flags = {
    CF_STATIC_OBJECT: 1,
    CF_KINEMATIC_OBJECT: 2,
    CF_NO_CONTACT_RESPONSE: 4,
    CF_CUSTOM_MATERIAL_CALLBACK: 8,
    CF_CHARACTER_OBJECT: 16
  };

  const GRAVITY = 75;

  class AmmoJSKinematicCharacterController {
    constructor() {
    }

    Destroy() {
    }

    Init(pos, quat, userData) {
      const radius = 1;
      const height = 3;

      this.transform_ = new Ammo.btTransform();
      this.transform_.setIdentity();
      this.transform_.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
      this.transform_.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));

      this.shape_ = new Ammo.btCapsuleShape(radius, height);
      this.shape_.setMargin(0.05);

      this.body_ = new Ammo.btPairCachingGhostObject();
      this.body_.setWorldTransform(this.transform_);
      this.body_.setCollisionShape(this.shape_);
      this.body_.setCollisionFlags(flags.CF_CHARACTER_OBJECT);
      this.body_.activate(true);

      this.controller_ = new Ammo.btKinematicCharacterController(this.body_, this.shape_, 0.35, 1);
      this.controller_.setUseGhostSweepTest(true);
      this.controller_.setUpInterpolate();
      this.controller_.setGravity(GRAVITY);
      this.controller_.setMaxSlope(Math.PI / 3);
      this.controller_.canJump(true);
      this.controller_.setJumpSpeed(GRAVITY/3);
      this.controller_.setMaxJumpHeight(100);

      this.userData_ = new Ammo.btVector3(0, 0, 0);
      this.userData_.userData = userData;
      this.body_.setUserPointer(this.userData_);

      this.tmpVec3_ = new Ammo.btVector3(0, 0, 0);
    }

    setJumpMultiplier(multiplier) {
      this.controller_.setJumpSpeed(multiplier * GRAVITY / 3);
    }

    setWalkDirection(walk) {
      this.tmpVec3_.setValue(walk.x, walk.y, walk.z);
      this.controller_.setWalkDirection(this.tmpVec3_);
    }

    onGround() {
      return this.controller_.onGround();
    }

    jump() {
      if (this.controller_.onGround()) {
        this.controller_.jump();
      }
    }
  }

  class AmmoJSRigidBody {
    constructor() {
    }

    Destroy() {
      Ammo.destroy(this.body_);
      Ammo.destroy(this.info_);
      Ammo.destroy(this.shape_);
      Ammo.destroy(this.inertia_);
      Ammo.destroy(this.motionState_);
      Ammo.destroy(this.transform_);
      Ammo.destroy(this.userData_);

      if (this.mesh_) {
        Ammo.destroy(this.mesh_);
      }
    }

    InitBox(pos, quat, size, userData) {
      this.transform_ = new Ammo.btTransform();
      this.transform_.setIdentity();
      this.transform_.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
      this.transform_.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
      this.motionState_ = new Ammo.btDefaultMotionState(this.transform_);

      let btSize = new Ammo.btVector3(size.x * 0.5, size.y * 0.5, size.z * 0.5);
      this.shape_ = new Ammo.btBoxShape(btSize);
      this.shape_.setMargin(0.05);

      this.inertia_ = new Ammo.btVector3(0, 0, 0);
      this.shape_.calculateLocalInertia(10, this.inertia_);

      this.info_ = new Ammo.btRigidBodyConstructionInfo(10, this.motionState_, this.shape_, this.inertia_);
      this.body_ = new Ammo.btRigidBody(this.info_);

      this.userData_ = new Ammo.btVector3(0, 0, 0);
      this.userData_.userData = userData;
      this.body_.setUserPointer(this.userData_);

      Ammo.destroy(btSize);
    }

    InitMesh(src, pos, quat, userData) {
      const A0 = new Ammo.btVector3(0, 0, 0);
      const A1 = new Ammo.btVector3(0, 0, 0);
      const A2 = new Ammo.btVector3(0, 0, 0);

      const V0 = new THREE.Vector3();
      const V1 = new THREE.Vector3();
      const V2 = new THREE.Vector3();

      this.mesh_ = new Ammo.btTriangleMesh(true, true);

      src.traverse(c => {
        c.updateMatrixWorld(true);
        if (c.geometry) {
          const p = c.geometry.attributes.position.array;
          for (let i = 0; i < c.geometry.index.count; i+=3) {
            const i0 = c.geometry.index.array[i] * 3;
            const i1 = c.geometry.index.array[i+1] * 3;
            const i2 = c.geometry.index.array[i+2] * 3;

            V0.fromArray(p, i0).applyMatrix4(c.matrixWorld);
            V1.fromArray(p, i1).applyMatrix4(c.matrixWorld);
            V2.fromArray(p, i2).applyMatrix4(c.matrixWorld);

            A0.setX(V0.x);
            A0.setY(V0.y);
            A0.setZ(V0.z);
            A1.setX(V1.x);
            A1.setY(V1.y);
            A1.setZ(V1.z);
            A2.setX(V2.x);
            A2.setY(V2.y);
            A2.setZ(V2.z);
            this.mesh_.addTriangle(A0, A1, A2, false);
          }
        }
      });

      this.inertia_ = new Ammo.btVector3(0, 0, 0);
      this.shape_ = new Ammo.btBvhTriangleMeshShape(this.mesh_, true, true);
      this.shape_.setMargin(0.05);
      this.shape_.calculateLocalInertia(10, this.inertia_);

      this.transform_ = new Ammo.btTransform();
      this.transform_.setIdentity();
      this.transform_.getOrigin().setValue(pos.x, pos.y, pos.z);
      this.transform_.getRotation().setValue(quat.x, quat.y, quat.z, quat.w);
      this.motionState_ = new Ammo.btDefaultMotionState(this.transform_);

      this.info_ = new Ammo.btRigidBodyConstructionInfo(10, this.motionState_, this.shape_, this.inertia_);
      this.body_ = new Ammo.btRigidBody(this.info_);

      this.userData_ = new Ammo.btVector3(0, 0, 0);
      this.userData_.userData = userData;
      this.body_.setUserPointer(this.userData_);

      Ammo.destroy(A0);
      Ammo.destroy(A1);
      Ammo.destroy(A2);
    }
  }

  class AmmoJSController extends entity.Component {
    constructor() {
      super();
    }

    Destroy() {
      Ammo.Destroy(this.physicsWorld_);
      Ammo.Destroy(this.solver_);
      Ammo.Destroy(this.broadphase_);
      Ammo.Destroy(this.dispatcher_);
      Ammo.Destroy(this.collisionConfiguration_);
    }

    InitEntity() {
      this.collisionConfiguration_ = new Ammo.btDefaultCollisionConfiguration();
      this.dispatcher_ = new Ammo.btCollisionDispatcher(this.collisionConfiguration_);
      this.broadphase_ = new Ammo.btDbvtBroadphase();
      this.solver_ = new Ammo.btSequentialImpulseConstraintSolver();
      this.physicsWorld_ = new Ammo.btDiscreteDynamicsWorld(
          this.dispatcher_, this.broadphase_, this.solver_, this.collisionConfiguration_);
      this.physicsWorld_.setGravity(new Ammo.btVector3(0, -100, 0));

      this.tmpRayOrigin_ = new Ammo.btVector3();
      this.tmpRayDst_ = new Ammo.btVector3();
      // this.rayCallback_ = new Ammo.ClosestRayResultCallback(this.tmpRayOrigin_, this.tmpRayDst_);
      this.rayCallback_ = new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_, this.tmpRayDst_);
    }

    RayTest(start, end) {
      this.tmpRayOrigin_.setValue(start.x, start.y, start.z);
      this.tmpRayDst_.setValue(end.x, end.y, end.z);
      // this.rayCallback_.get_m_rayFromWorld().setValue(start.x, start.y, start.z);
      // this.rayCallback_.get_m_rayToWorld().setValue(end.x, end.y, end.z);
      // this.rayCallback_.rayCallback.set_m_closestHitFraction(1);
      // this.rayCallback_.rayCallback.set_m_collisionObject(null);

      this.tmpRayOrigin_.setValue(start.x, start.y, start.z);
      this.tmpRayDst_.setValue(end.x, end.y, end.z);
      const rayCallback = new Ammo.AllHitsRayResultCallback(this.tmpRayOrigin_, this.tmpRayDst_);

      this.physicsWorld_.rayTest(this.tmpRayOrigin_, this.tmpRayDst_, rayCallback);

      const hitData = [];
      if (rayCallback.hasHit()) {
        const collisionObjs = rayCallback.get_m_collisionObjects();
        const points = rayCallback.get_m_hitPointWorld();
        const normals = rayCallback.get_m_hitNormalWorld();
        const hits = collisionObjs.size();

        for (let i = 0; i < hits; ++i) {
          const obj = collisionObjs.at(i);
          const ud0 = Ammo.castObject(obj.getUserPointer(), Ammo.btVector3).userData;
  
          const point = points.at(i);
          const normal = normals.at(i);
  
          const p = new THREE.Vector3(point.x(), point.y(), point.z());
          const n = new THREE.Vector3(normal.x(), normal.y(), normal.z());

          hitData.push({
            name: ud0.name,
            position: p,
            normal: n,
            distance: p.distanceTo(start),
          });
        }
      }

      hitData.sort((a, b) => { return a.distance - b.distance});

      Ammo.destroy(rayCallback);

      return hitData;
    }

    RemoveRigidBody(body) {
      this.physicsWorld_.removeRigidBody(body.body_);
      body.Destroy();
    }

    CreateKinematicCharacterController(pos, quat, userData) {
      const controller = new AmmoJSKinematicCharacterController();
      controller.Init(pos, quat, userData);

      this.physicsWorld_.addCollisionObject(controller.body_);
      this.physicsWorld_.addAction(controller.controller_);

      const broadphase = this.physicsWorld_.getBroadphase();
      const paircache = broadphase.getOverlappingPairCache()
      paircache.setInternalGhostPairCallback(new Ammo.btGhostPairCallback());

      return controller;
    }

    CreateBox(pos, quat, size, userData) {
      const box = new AmmoJSRigidBody();

      box.InitBox(pos, quat, size, userData);

      this.physicsWorld_.addRigidBody(box.body_);

      box.body_.setActivationState(4);
      box.body_.setCollisionFlags(2);

      return box;
    }

    CreateMesh(src, pos, quat, userData) {
      const mesh = new AmmoJSRigidBody();

      mesh.InitMesh(src, pos, quat, userData);

      this.physicsWorld_.addRigidBody(mesh.body_);

      mesh.body_.setActivationState(4);
      mesh.body_.setCollisionFlags(2);

      return mesh;
    }

    StepSimulation(timeElapsedS) {
      this.physicsWorld_.stepSimulation(timeElapsedS, 10);

      const dispatcher = this.physicsWorld_.getDispatcher();
      const numManifolds = this.dispatcher_.getNumManifolds();
    
      const collisions = {};

      for (let i=0; i < numManifolds; i++) {
        const contactManifold = dispatcher.getManifoldByIndexInternal(i);
        const numContacts = contactManifold.getNumContacts();

        if (numContacts > 0) {
          const rb0 = contactManifold.getBody0();
          const rb1 = contactManifold.getBody1();
          const ud0 = Ammo.castObject(rb0.getUserPointer(), Ammo.btVector3).userData;
          const ud1 = Ammo.castObject(rb1.getUserPointer(), Ammo.btVector3).userData;

          if (!(ud0.name in collisions)) {
            collisions[ud0.name] = [];
          }
          collisions[ud0.name].push(ud1.name);

          if (!(ud1.name in collisions)) {
            collisions[ud1.name] = [];
          }
          collisions[ud1.name].push(ud0.name);
        }
      }

      for (let k in collisions) {
        const e = this.FindEntity(k);
        e.Broadcast({topic: 'physics.collision', value: collisions[k]});
      }
    }

    Update(_) {
    }
  }

  return {
      AmmoJSController: AmmoJSController,
  };
})();