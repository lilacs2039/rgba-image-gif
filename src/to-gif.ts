import { isImageData } from '@rgba-image/common'
import GIFEncoder from 'gifencoder'
import { isSettings, isRepeat, isDelay, isQuality, isTransparent } from './predicates'
import { FrameArg, FrameSettings } from './types'

export const toGif = (imageData: ImageData) =>
  toAnimatedGif(imageData)

export const toAnimatedGif = (
  ...frames: FrameArg[]
) => {
  const firstFrame = frames.find(isImageData)

  if (firstFrame === undefined) {
    throw Error('Expected at least one frame')
  }

  const { width, height } = firstFrame

  const encoder = new GIFEncoder(width, height)

  encoder.start()

  let isFrameAdded = false

  for (const frame of frames) {
    if( handleSettings( encoder, frame, isFrameAdded ) ) continue

    if (frame.width !== width || frame.height !== height) {
      throw Error('Expected all frames to be the same size')
    }

    encoder.addFrame(frame.data as any)
    isFrameAdded = true
  }

  encoder.finish()

  const buffer = encoder.out.getData()

  return new Uint8Array(buffer)
}

const handleSettings = (
  encoder: GIFEncoder, frame: FrameArg, isFrameAdded: boolean
): frame is FrameSettings => {
  if (!isSettings(frame)) return false

  if (isRepeat(frame) && !isFrameAdded) {
    encoder.setRepeat(frame.repeat)
  }

  if (isDelay(frame)) encoder.setDelay(frame.delay)
  
  if (isQuality(frame)) encoder.setRepeat(frame.quality)
  
  if (isTransparent(frame)) {
    if (frame.transparent === null) {
      encoder.setTransparent(null as any)
    } else {
      const [r, g, b] = frame.transparent
      const rgb = r << 16 | g << 8 | b

      encoder.setTransparent(rgb)
    }
  }

  return true
}