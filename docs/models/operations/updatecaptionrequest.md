# UpdateCaptionRequest

## Example Usage

```typescript
import { UpdateCaptionRequest } from "iris-sdk/models/operations";

let value: UpdateCaptionRequest = {
  id: "<id>",
  frameIndex: 672.50,
  updateCaptionDto: {
    caption: {},
    text: "New caption text here",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the recording                                                    |
| `frameIndex`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | The index of the frame to update caption for                               |
| `updateCaptionDto`                                                         | [components.UpdateCaptionDto](../../models/components/updatecaptiondto.md) | :heavy_check_mark:                                                         | New caption text                                                           |