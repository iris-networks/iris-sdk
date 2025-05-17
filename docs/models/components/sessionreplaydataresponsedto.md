# SessionReplayDataResponseDto

## Example Usage

```typescript
import { SessionReplayDataResponseDto } from "iris-sdk/models/components";

let value: SessionReplayDataResponseDto = {
  success: true,
  replayData: {
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
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | Whether the request was successful                                 | true                                                               |
| `replayData`                                                       | [components.VideoDataDto](../../models/components/videodatadto.md) | :heavy_check_mark:                                                 | Replay video data                                                  |                                                                    |