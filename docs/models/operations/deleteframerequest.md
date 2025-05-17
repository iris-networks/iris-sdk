# DeleteFrameRequest

## Example Usage

```typescript
import { DeleteFrameRequest } from "iris-sdk/models/operations";

let value: DeleteFrameRequest = {
  id: "<id>",
  frameIndex: 2273.75,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | The ID of the recording          |
| `frameIndex`                     | *number*                         | :heavy_check_mark:               | The index of the frame to delete |