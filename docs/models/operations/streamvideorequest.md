# StreamVideoRequest

## Example Usage

```typescript
import { StreamVideoRequest } from "iris-sdk/models/operations";

let value: StreamVideoRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The ID of the recording to stream video for                 |
| `download`                                                  | *boolean*                                                   | :heavy_minus_sign:                                          | Set to "true" to download the video instead of streaming it |