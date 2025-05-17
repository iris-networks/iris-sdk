# VideoStatusResponseDto

## Example Usage

```typescript
import { VideoStatusResponseDto } from "iris-sdk/models/components";

let value: VideoStatusResponseDto = {
  recordingId: "12345678-1234-5678-1234-567812345678",
  hasVideo: true,
  status: "completed",
  message: "Video generation is complete",
  startedAt: 1651234567890,
  completedAt: 1651234597890,
  elapsedSeconds: 30,
  format: "mp4",
  sizeMB: 2.5,
  error: "FFmpeg process exited with code 1",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `recordingId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | ID of the recording                                                   | 12345678-1234-5678-1234-567812345678                                  |
| `hasVideo`                                                            | *boolean*                                                             | :heavy_check_mark:                                                    | Whether the recording has a video file                                | true                                                                  |
| `status`                                                              | [components.Status](../../models/components/status.md)                | :heavy_check_mark:                                                    | Status of video generation                                            | completed                                                             |
| `message`                                                             | *string*                                                              | :heavy_check_mark:                                                    | Human-readable status message                                         | Video generation is complete                                          |
| `startedAt`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp when video generation started (if in progress or completed) | 1651234567890                                                         |
| `completedAt`                                                         | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp when video generation completed (if completed)              | 1651234597890                                                         |
| `elapsedSeconds`                                                      | *number*                                                              | :heavy_minus_sign:                                                    | Elapsed time in seconds since generation started (if in progress)     | 30                                                                    |
| `format`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Video format (if completed)                                           | mp4                                                                   |
| `sizeMB`                                                              | *number*                                                              | :heavy_minus_sign:                                                    | Video size in MB (if completed)                                       | 2.5                                                                   |
| `error`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Error message (if failed)                                             | FFmpeg process exited with code 1                                     |