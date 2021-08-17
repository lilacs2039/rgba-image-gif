import { Frame } from 'omggif'
export { Frame } from 'omggif'

export type Repeat = {
  repeat: 0 | -1
}

export type Delay = {
  delay: number
}

export type Quality = {
  quality: number
}

export type Transparent = {
  transparent: [ number, number, number ] | null
}

export type FrameOptions = Repeat & Delay & Quality & Transparent
 
export type FrameProperty = Repeat | Delay | Quality | Transparent

export type FrameSettings = FrameProperty & Partial<FrameOptions>

export type FrameArg = ImageData | FrameSettings

export type FrameData = {
  imageData: ImageData
  frame: Frame
}
