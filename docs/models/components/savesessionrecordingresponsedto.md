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
    createdAt: 2974.37,
    duration: 8137.98,
    frameCount: 3965.06,
    filePath: "/usr/share/insignificant_woot.dump",
    size: 2982.82,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the request was successful                                                                                         | true                                                                                                                       |
| `recording`                                                                                                                | [components.SaveSessionRecordingResponseDtoRecording](../../models/components/savesessionrecordingresponsedtorecording.md) | :heavy_check_mark:                                                                                                         | Recording metadata                                                                                                         |                                                                                                                            |