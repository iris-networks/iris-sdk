# FramesAndCaptionsResponseDto

## Example Usage

```typescript
import { FramesAndCaptionsResponseDto } from "iris-sdk/models/components";

let value: FramesAndCaptionsResponseDto = {
  success: true,
  frames: [
    "<value 1>",
    "<value 2>",
  ],
  captions: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `success`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the operation was successful                                     | true                                                                     |
| `frames`                                                                 | *string*[]                                                               | :heavy_check_mark:                                                       | Array of base64-encoded frames                                           |                                                                          |
| `captions`                                                               | [components.CaptionDataDto](../../models/components/captiondatadto.md)[] | :heavy_check_mark:                                                       | Array of caption data objects                                            |                                                                          |