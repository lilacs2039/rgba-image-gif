import { FrameSettings, Repeat, Delay, Quality, Transparent } from './types'

export const isSettings = (value: any): value is FrameSettings => (
  isRepeat(value) ||
  isDelay(value) ||
  isQuality(value) ||
  isTransparent(value)
)

export const isRepeat = (value: any): value is Repeat =>
  value && typeof value.repeat === 'number'

export const isDelay = (value: any): value is Delay =>
  value && typeof value.delay === 'number'

  export const isQuality = (value: any): value is Quality =>
  value && typeof value.quality === 'number'

export const isTransparent = (value: any): value is Transparent =>
  value && typeof value.transparent === 'number' || value.transparent === null
