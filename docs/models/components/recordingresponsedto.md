# RecordingResponseDto

## Example Usage

```typescript
import { RecordingResponseDto } from "iris-sdk/models/components";

let value: RecordingResponseDto = {
  success: true,
  recording: {
    id: "<id>",
    sessionId: "<id>",
    title: "<value>",
    createdAt: 960.98,
    duration: 9764.59,
    frameCount: 4686.51,
    filePath: "/var/tmp/farm_bourgeoisie.kar",
    size: 9292.96,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | Whether the request was successful                           | true                                                         |
| `recording`                                                  | [components.Recording](../../models/components/recording.md) | :heavy_check_mark:                                           | Recording metadata                                           |                                                              |