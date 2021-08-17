"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnimatedGif = exports.frameDataFromAnimatedGif = exports.fromAnimatedGif = exports.fromGif = void 0;
const create_image_1 = require("@rgba-image/create-image");
const omggif_1 = require("omggif");
const fromGif = (gif) => exports.fromAnimatedGif(gif)[0];
exports.fromGif = fromGif;
const fromAnimatedGif = (gif) => {
    const reader = new omggif_1.GifReader(Buffer.from(gif));
    const { width, height } = reader;
    const length = reader.numFrames();
    const frames = Array(length);
    for (let i = 0; i < length; i++) {
        const image = create_image_1.createImage(width, height);
        reader.decodeAndBlitFrameRGBA(i, image.data);
        frames[i] = image;
    }
    return frames;
};
exports.fromAnimatedGif = fromAnimatedGif;
const frameDataFromAnimatedGif = (gif) => {
    const reader = new omggif_1.GifReader(Buffer.from(gif));
    const { width, height } = reader;
    const length = reader.numFrames();
    const frames = Array(length);
    for (let i = 0; i < length; i++) {
        const imageData = create_image_1.createImage(width, height);
        reader.decodeAndBlitFrameRGBA(i, imageData.data);
        const frame = reader.frameInfo(i);
        frames[i] = { imageData, frame };
    }
    return frames;
};
exports.frameDataFromAnimatedGif = frameDataFromAnimatedGif;
const isAnimatedGif = (gif) => {
    const reader = new omggif_1.GifReader(Buffer.from(gif));
    return reader.numFrames() > 1;
};
exports.isAnimatedGif = isAnimatedGif;
//# sourceMappingURL=from-gif.js.map