# GenerateVideoResponseDto

## Example Usage

```typescript
import { GenerateVideoResponseDto } from "iris-sdk/models/components";

let value: GenerateVideoResponseDto = {
  success: true,
  videoPath:
    "/Users/user/.iris/videos/12345678-1234-5678-1234-567812345678/video.mp4",
  recording: {
    id: "<id>",
    sessionId: "<id>",
    title: "<value>",
    createdAt: 9755.22,
    duration: 8558.03,
    frameCount: 117.14,
    filePath: "/opt/furthermore_overcharge_general.vst",
    size: 2098.44,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the video generation was successful                                                                  | true                                                                                                         |
| `videoPath`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Path to the generated video file                                                                             | /Users/user/.iris/videos/12345678-1234-5678-1234-567812345678/video.mp4                                      |
| `recording`                                                                                                  | [components.GenerateVideoResponseDtoRecording](../../models/components/generatevideoresponsedtorecording.md) | :heavy_check_mark:                                                                                           | Recording metadata after video generation                                                                    |                                                                                                              |