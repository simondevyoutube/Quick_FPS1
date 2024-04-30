import {entity} from "./entity.js";


export const health_component = (() => {

  class HealthComponent extends entity.Component {
    static CLASS_NAME = 'HealthComponent';

    get NAME() {
      return HealthComponent.CLASS_NAME;
    }

    constructor(params) {
      super();
      this.stats_ = {...params};
    }

    InitComponent() {
      this.RegisterHandler_(
          'shot.hit', (m) => this.OnDamage_(m));
      this.RegisterHandler_(
          'health.add-experience', (m) => this.OnAddExperience_(m));

      this.UpdateUI_();
    }

    InitEntity() {
      this.Parent.Attributes.Stats = this.stats_;
    }

    IsAlive() {
      return this.stats_.health > 0;
    }

    get Health() {
      return this.stats_.health;
    }

    UpdateUI_() {
      if (!this.stats_.updateUI) {
        return;
      }

      const bar = document.getElementById('health-bar');

      // const healthAsPercentage = this.stats_.health / this.stats_.maxHealth;
      // bar.style.width = Math.floor(200 * healthAsPercentage) + 'px';

      // document.getElementById('stats-strength').innerText = this.stats_.strength;
      // document.getElementById('stats-wisdomness').innerText = this.stats_.wisdomness;
      // document.getElementById('stats-benchpress').innerText = this.stats_.benchpress;
      // document.getElementById('stats-curl').innerText = this.stats_.curl;
      // document.getElementById('stats-experience').innerText = this.stats_.experience;
    }

    _ComputeLevelXPRequirement() {
      const level = this.stats_.level;
      // Blah just something easy
      const xpRequired = Math.round(2 ** (level - 1) * 100);
      return xpRequired;
    }

    OnAddExperience_(msg) {
      this.stats_.experience += msg.value;
      const requiredExperience = this._ComputeLevelXPRequirement();
      if (this.stats_.experience < requiredExperience) {
        return;
      }

      this.stats_.level += 1;
      this.stats_.strength += 1;
      this.stats_.wisdomness += 1;
      this.stats_.benchpress += 1;
      this.stats_.curl += 2;

      const spawner = this.FindEntity(
          'level-up-spawner').GetComponent('LevelUpComponentSpawner');
      spawner.Spawn(this.Parent.Position);

      this.Broadcast({
          topic: 'health.levelGained',
          value: this.stats_.level,
      });

      this.UpdateUI_();
    }

    OnDeath_() {
      this.Broadcast({
          topic: 'health.death',
      });
    }

    OnHealthChanged_() {
      if (this.stats_.health == 0) {
        this.OnDeath_();
      }

      this.Broadcast({
        topic: 'health.update',
        health: this.stats_.health,
        maxHealth: this.stats_.maxHealth,
      });

      this.UpdateUI_();
    }

    OnDamage_(msg) {
      const oldHealth = this.stats_.health;
      this.stats_.health = Math.max(0.0, this.stats_.health - 25);

      if (oldHealth != this.stats_.health) {
        this.OnHealthChanged_();
      }
    }
  };

  return {
    HealthComponent: HealthComponent,
  };

})();