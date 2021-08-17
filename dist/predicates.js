"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransparent = exports.isQuality = exports.isDelay = exports.isRepeat = exports.isSettings = void 0;
const isSettings = (value) => (exports.isRepeat(value) ||
    exports.isDelay(value) ||
    exports.isQuality(value) ||
    exports.isTransparent(value));
exports.isSettings = isSettings;
const isRepeat = (value) => value && typeof value.repeat === 'number';
exports.isRepeat = isRepeat;
const isDelay = (value) => value && typeof value.delay === 'number';
exports.isDelay = isDelay;
const isQuality = (value) => value && typeof value.quality === 'number';
exports.isQuality = isQuality;
const isTransparent = (value) => value && typeof value.transparent === 'number' || value.transparent === null;
exports.isTransparent = isTransparent;
//# sourceMappingURL=predicates.js.map