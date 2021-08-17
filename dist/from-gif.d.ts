import { GifData } from './types';
export declare const fromGif: (gif: Uint8Array) => ImageData;
export declare const fromAnimatedGif: (gif: Uint8Array) => ImageData[];
export declare const dataFromAnimatedGif: (gif: Uint8Array) => GifData;
export declare const isAnimatedGif: (gif: Uint8Array) => boolean;
