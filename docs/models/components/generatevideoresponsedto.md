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
    createdAt: 6254.33,
    duration: 7946.75,
    frameCount: 8061.5,
    filePath: "/etc/ppp/serve_upon.exe",
    size: 9141.28,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the video generation was successful                                                                  | true                                                                                                         |
| `videoPath`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Path to the generated video file                                                                             | /Users/user/.iris/videos/12345678-1234-5678-1234-567812345678/video.mp4                                      |
| `recording`                                                                                                  | [components.GenerateVideoResponseDtoRecording](../../models/components/generatevideoresponsedtorecording.md) | :heavy_check_mark:                                                                                           | Recording metadata after video generation                                                                    |                                                                                                              |