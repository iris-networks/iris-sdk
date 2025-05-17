# RecordingListResponseDto

## Example Usage

```typescript
import { RecordingListResponseDto } from "iris-sdk/models/components";

let value: RecordingListResponseDto = {
  recordings: [
    {
      id: "<id>",
      sessionId: "<id>",
      title: "<value>",
      createdAt: 724.68,
      duration: 6323.79,
      frameCount: 9098.17,
      filePath: "/usr/sbin/unlike.vss",
      size: 2774.1,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `recordings`                                                                   | [components.VideoRecordingDto](../../models/components/videorecordingdto.md)[] | :heavy_check_mark:                                                             | List of recordings                                                             |