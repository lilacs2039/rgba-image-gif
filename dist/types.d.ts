import { Frame } from 'omggif';
export { Frame } from 'omggif';
export declare type Repeat = {
    repeat: number;
};
export declare type Delay = {
    delay: number;
};
export declare type Quality = {
    quality: number;
};
export declare type Transparent = {
    transparent: [number, number, number] | null;
};
export declare type FrameOptions = Repeat & Delay & Quality & Transparent;
export declare type FrameProperty = Repeat | Delay | Quality | Transparent;
export declare type FrameSettings = FrameProperty & Partial<FrameOptions>;
export declare type FrameArg = ImageData | FrameSettings;
export declare type FrameData = {
    imageData: ImageData;
    frame: Frame;
};
export declare type GifData = Repeat & {
    frames: FrameData[];
};
