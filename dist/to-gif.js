"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAnimatedGif = exports.toGif = void 0;
const common_1 = require("@rgba-image/common");
const gifencoder_1 = __importDefault(require("gifencoder"));
const predicates_1 = require("./predicates");
const toGif = (imageData) => exports.toAnimatedGif(imageData);
exports.toGif = toGif;
const toAnimatedGif = (...frames) => {
    const firstFrame = frames.find(common_1.isImageData);
    if (firstFrame === undefined) {
        throw Error('Expected at least one frame');
    }
    const { width, height } = firstFrame;
    const encoder = new gifencoder_1.default(width, height);
    encoder.start();
    let isFrameAdded = false;
    for (const frame of frames) {
        if (handleSettings(encoder, frame, isFrameAdded))
            continue;
        if (frame.width !== width || frame.height !== height) {
            throw Error('Expected all frames to be the same size');
        }
        encoder.addFrame(frame.data);
        isFrameAdded = true;
    }
    encoder.finish();
    const buffer = encoder.out.getData();
    return new Uint8Array(buffer);
};
exports.toAnimatedGif = toAnimatedGif;
const handleSettings = (encoder, frame, isFrameAdded) => {
    if (!predicates_1.isSettings(frame))
        return false;
    if (predicates_1.isRepeat(frame) && !isFrameAdded) {
        encoder.setRepeat(frame.repeat);
    }
    if (predicates_1.isDelay(frame))
        encoder.setDelay(frame.delay);
    if (predicates_1.isQuality(frame))
        encoder.setRepeat(frame.quality);
    if (predicates_1.isTransparent(frame)) {
        if (frame.transparent === null) {
            encoder.setTransparent(null);
        }
        else {
            const [r, g, b] = frame.transparent;
            const rgb = r << 16 | g << 8 | b;
            encoder.setTransparent(rgb);
        }
    }
    return true;
};
//# sourceMappingURL=to-gif.js.map