# SaveSessionRecordingResponseDto

## Example Usage

```typescript
import { SaveSessionRecordingResponseDto } from "iris-sdk/models/components";

let value: SaveSessionRecordingResponseDto = {
  success: true,
  recording: {
    id: "<id>",
    sessionId: "<id>",
    title: "<value>",
    createdAt: 7917.6,
    duration: 1647.55,
    frameCount: 9617.12,
    filePath: "/boot/astride_joshingly_nor.msm",
    size: 5432.77,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the request was successful                                                                                         | true                                                                                                                       |
| `recording`                                                                                                                | [components.SaveSessionRecordingResponseDtoRecording](../../models/components/savesessionrecordingresponsedtorecording.md) | :heavy_check_mark:                                                                                                         | Recording metadata                                                                                                         |                                                                                                                            |