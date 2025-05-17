# VideoStreamInProgressResponseDto

## Example Usage

```typescript
import { VideoStreamInProgressResponseDto } from "iris-sdk/models/components";

let value: VideoStreamInProgressResponseDto = {
  status: "in_progress",
  message: "Video generation is in progress. Please try again later.",
  startedAt: 1651234567890,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                               | [components.VideoStreamInProgressResponseDtoStatus](../../models/components/videostreaminprogressresponsedtostatus.md) | :heavy_check_mark:                                                                                                     | Status of video generation                                                                                             | in_progress                                                                                                            |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Human-readable status message                                                                                          | Video generation is in progress. Please try again later.                                                               |
| `startedAt`                                                                                                            | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Timestamp when video generation started                                                                                | 1651234567890                                                                                                          |