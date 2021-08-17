import { FrameArg } from './types';
export declare const toGif: (imageData: ImageData) => Uint8Array;
export declare const toAnimatedGif: (...frames: FrameArg[]) => Uint8Array;
