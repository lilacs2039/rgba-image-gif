import { FrameSettings, Repeat, Delay, Quality, Transparent } from './types';
export declare const isSettings: (value: any) => value is FrameSettings;
export declare const isRepeat: (value: any) => value is Repeat;
export declare const isDelay: (value: any) => value is Delay;
export declare const isQuality: (value: any) => value is Quality;
export declare const isTransparent: (value: any) => value is Transparent;
