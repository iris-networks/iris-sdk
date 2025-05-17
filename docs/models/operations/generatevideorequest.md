# GenerateVideoRequest

## Example Usage

```typescript
import { GenerateVideoRequest } from "iris-sdk/models/operations";

let value: GenerateVideoRequest = {
  id: "<id>",
  generateVideoDto: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the recording to generate a video for                            |
| `generateVideoDto`                                                         | [components.GenerateVideoDto](../../models/components/generatevideodto.md) | :heavy_minus_sign:                                                         | Options for video generation                                               |