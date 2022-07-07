const config = require('config');

function salute(extra, isConfigKey) {
    if (isConfigKey) {
        const configExtra = getExtraKey(extra);
        if (configExtra) {
            return `salute ${configExtra}`;
        } else {
            return 1;
        }
    } else {
        return `salute ${extra}`;
    }
}

function getExtraKey(extraKey) {
    try {
        const configExtra = config.get(extraKey);
        return configExtra
    } catch {
        return null;
    }
}

export const saluter = {salute};