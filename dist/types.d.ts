import { Frame } from 'omggif';
export declare type Repeat = {
    repeat: 0 | -1;
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
