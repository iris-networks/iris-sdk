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
      createdAt: 3834.42,
      duration: 7917.25,
      frameCount: 5288.95,
      filePath: "/selinux/wasabi_uncover_agitated.m2a",
      size: 6120.96,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `recordings`                                                                   | [components.VideoRecordingDto](../../models/components/videorecordingdto.md)[] | :heavy_check_mark:                                                             | List of recordings                                                             |