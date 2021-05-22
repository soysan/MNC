import Data from './Data';

/**
 * @param {String|HTMLElement} selector to wrap
 */

function GreenLeaves(selector) {
    VERSION = '0.1.0';
    id = 'GreenLeaves-' + new Date().getTime();
    cache = new Data();
    plugin = {};

    if (!(this instanceof GreenLeaves)) {
        return new GreenLeaves(selector);
    }
    if (selector instanceof GreenLeaves) {
        return selector;
    }
    if (selector instanceof HTMLElement) {
        this._elem = selector;
    } else {
        this._elem = document.querySelector(selector);
    }
    if (!selector) {
        this._elem = document.createElement('div');
    }
    if (!this._elem.hasOwnProperty(GreenLeaves.id)) {
        this._elem[GreenLeaves.id] = Data.uid++;
    }

    return this;
}
