# VideoRecordingDto

## Example Usage

```typescript
import { VideoRecordingDto } from "iris-sdk/models/components";

let value: VideoRecordingDto = {
  id: "<id>",
  sessionId: "<id>",
  title: "<value>",
  createdAt: 9471.79,
  duration: 7917.85,
  frameCount: 4086.6,
  filePath: "/etc/mail/well_via.ics",
  size: 3009.9,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for the recording                                                  |
| `sessionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Session ID this recording belongs to                                                 |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Title of the recording                                                               |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Description of the recording                                                         |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | Timestamp when the recording was created                                             |
| `duration`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Duration of the recording in milliseconds                                            |
| `frameCount`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | Number of frames in the recording                                                    |
| `thumbnailPath`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | Path to the thumbnail image                                                          |
| `filePath`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Path to the recording files                                                          |
| `size`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | Size of the recording in bytes                                                       |
| `operatorType`                                                                       | [components.OperatorType](../../models/components/operatortype.md)                   | :heavy_minus_sign:                                                                   | Operator type used for the session                                                   |
| `videoGenerationStatus`                                                              | [components.VideoGenerationStatus](../../models/components/videogenerationstatus.md) | :heavy_minus_sign:                                                                   | Status of video generation                                                           |
| `videoGenerationStartedAt`                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when video generation started                                              |
| `videoGenerationCompletedAt`                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp when video generation completed                                            |
| `videoGenerationError`                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Error message if video generation failed                                             |
| `hasVideo`                                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the recording has a video                                                    |
| `videoPath`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Path to the generated video file                                                     |
| `videoFormat`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Format of the generated video                                                        |
| `videoSize`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | Size of the generated video in bytes                                                 |