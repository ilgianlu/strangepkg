const config = require('config');

function salute(extra) {
    if (extra) {
        return `salute ${extra}`;
    } else {
        return `salute ${config.get('extra')}`;
    }
}

export const saluter = {salute};