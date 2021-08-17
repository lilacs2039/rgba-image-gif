import { FrameData } from './types';
export declare const fromGif: (gif: Uint8Array) => ImageData;
export declare const fromAnimatedGif: (gif: Uint8Array) => ImageData[];
export declare const frameDataFromAnimatedGif: (gif: Uint8Array) => FrameData[];
export declare const isAnimatedGif: (gif: Uint8Array) => boolean;
