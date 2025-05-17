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
    createdAt: 8739.24,
    duration: 5913.36,
    frameCount: 9122.75,
    filePath: "/usr/behind.xlt",
    size: 4745.8,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | Whether the request was successful                           | true                                                         |
| `recording`                                                  | [components.Recording](../../models/components/recording.md) | :heavy_check_mark:                                           | Recording metadata                                           |                                                              |