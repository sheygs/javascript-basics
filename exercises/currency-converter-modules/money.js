import { init } from './lib.js';


// start the app when form is being hovered
document.querySelector('.app').addEventListener('mouseenter', init, { once: true });


