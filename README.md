# gif

Convert between ImageData and GIF

`npm install @rgba-image/gif`

```ts
import { fromGif } from '@rgba-image/gif'

// read the gif bytes then:

const imageData = fromGif( gifBytes )
```

```ts
import { toGif } from '@rgba-image/gif'

// get an imageData from somewhere, then:

const gif = toGif( imageData )

// gif is a Uint8Array - you can write to a file, stream somewhere etc
```

```ts
import { fromAnimatedGif } from '@rgba-image/gif'

// read the gif bytes then:

const imageDataFrames = fromAnimatedGif( gifBytes )

// imageDataFrames is an array of ImageData
```

```ts
import { toAnimatedGif } from '@rgba-image/gif'

// fetch your frames (array of ImageData) then:

const gif = toAnimatedGif( ...imageDatas )

// or manually

const gif2 = toAnimatedGif( imageData1, imageData2 )

/*
  you can intersperse options at any point:
  
  repeat: 0 for repeat, -1 for no-repeat
  delay: frame delay in ms
  quality: image quality. 10 is default.
  transparent: rgb tuple eg [ 255, 128, 0 ] or null
  
  repeat is ignored once the first frame has been added, so call it first

  options are applied to subsequent frames, except transparent which sets the
  last frame added and susequent frames
*/
const gif3 = toAnimatedGif( 
  { repeat: -1 }, imageData1, { delay: 500 }, imageData2, imageData3,
  { delay: 1000, transparent: [ 255, 128, 0 ] }, imageData4
)
```

```ts
import { dataFromAnimatedGif } from '@rgba-image/gif'

// read the gif bytes then:

const data = dataFromAnimatedGif( gifBytes )

/* 
  Retuns GifData

  GifData looks like:
  {
    repeat: number
    frames: FrameData[]
  }

  FrameData looks like: 
  {
    imageData: ImageData
    frame: Frame
  }

  Frame looks like:
  {
    data_length: number
    data_offset: number
    delay: number
    disposal: number
    has_local_palette: boolean
    height: number
    interlaced: boolean
    palette_offset: number | null
    palette_size: number | null
    transparent_index: number | null
    width: number
    x: number
    y: number
  }
*/
```

## license

MIT License

Copyright (c) 2021 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

