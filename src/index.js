import { stateManager, myKey, myData } from './state/stateManager.js';
import { renderManager, renderShell } from './render/renderManager.js';
import './styles/loadcss.js'// loads styles


(async () => {
    console.log("--BALL-ROLLING--");
    await stateManager();
    renderShell();

    if (myKey) {
        console.log(`My key: ${myKey}`);
        renderManager();
    } else {
        console.log("No API key found. Please enter your API key.");
    }
})();

