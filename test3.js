"use strict";
let r = 'test';
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
