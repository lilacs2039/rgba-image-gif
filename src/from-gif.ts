import { createImage } from '@rgba-image/create-image'
import { GifReader } from 'omggif'
import { FrameData, GifData } from './types'
import { Buffer } from 'buffer'

export const fromGif = ( gif: Uint8Array ) => fromAnimatedGif( gif )[ 0 ]

export const fromAnimatedGif = ( gif: Uint8Array ) => {
  const reader = new GifReader( Buffer.from( gif ) )

  const { width, height } = reader
  
  const length = reader.numFrames()

  const frames = Array<ImageData>( length )

  for( let i = 0; i < length; i++ ){
    const image = createImage( width, height )

    reader.decodeAndBlitFrameRGBA( i, image.data )

    frames[ i ] = image
  }

  return frames  
}

export const dataFromAnimatedGif = ( gif: Uint8Array ) => {
  const reader = new GifReader( Buffer.from( gif ) )
  
  const { width, height } = reader
 
  const length = reader.numFrames()
  const repeat = reader.loopCount()

  const frames = Array<FrameData>( length )

  for( let i = 0; i < length; i++ ){
    const imageData = createImage( width, height )

    reader.decodeAndBlitFrameRGBA( i, imageData.data )

    const frame = reader.frameInfo( i )

    frames[ i ] = { imageData, frame }
  }

  const gifData: GifData = {
    repeat, frames
  }

  return gifData
}

export const isAnimatedGif = ( gif: Uint8Array ) => {
  const reader = new GifReader( Buffer.from( gif ) )

  return reader.numFrames() > 1
}
