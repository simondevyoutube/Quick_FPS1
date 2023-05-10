import {entity} from "./entity.js";
import {THREE} from "./three-defs.js";


export const ui_controller = (() => {

  class UIController extends entity.Component {
    constructor(params) {
      super();
    }

    InitComponent() {
      this.RegisterHandler_(
          'ui.charge', (m) => this.OnCharge_(m));

      const messages = document.getElementById('top-left-ui-area');
      messages.style.visibility = 'hidden';

      // VIDEO HACK
      // window.setTimeout(() => {
      //   messages.style.visibility = 'visible';
      //   messages.classList.toggle('slideIn');

      //   window.setTimeout(() => {
      //     messages.classList.toggle('slideIn');
      //     messages.classList.toggle('fadeOut');
      //   }, 10000);
      // }, 10000);
    }

    OnCharge_(msg) {
      const chargeText = document.getElementById('charge-text');
      chargeText.innerText = Math.ceil(msg.value * 100) + '%';

      const chargeBar = document.getElementById('charge-bar');
      const C1 = new THREE.Color('rgb(89, 241, 142)');
      const C2 = new THREE.Color('rgb(237, 50, 50)');
      const col = C2.clone();
      col.lerpHSL(C1, msg.value);
      chargeBar.style.backgroundColor = col.getStyle(); 
      chargeBar.style.width = chargeText.innerText;
    }
  };

  return {
    UIController: UIController,
  };

})();