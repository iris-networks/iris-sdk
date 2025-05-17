# VideoDataDto

## Example Usage

```typescript
import { VideoDataDto } from "iris-sdk/models/components";

let value: VideoDataDto = {
  frames: [
    "data:image/png;base64,iVBORw0KGgo...",
  ],
  captions: [
    {
      timestamp: 1651234567890,
      conversation: {},
      frameIndex: 0,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `frames`                                                                     | *string*[]                                                                   | :heavy_check_mark:                                                           | Array of base64-encoded frames                                               | [<br/>"data:image/png;base64,iVBORw0KGgo..."<br/>]                           |
| `captions`                                                                   | [components.CaptionDataDto](../../models/components/captiondatadto.md)[]     | :heavy_check_mark:                                                           | Array of caption data                                                        |                                                                              |
| `metadata`                                                                   | [components.VideoRecordingDto](../../models/components/videorecordingdto.md) | :heavy_minus_sign:                                                           | Optional recording metadata                                                  |                                                                              |