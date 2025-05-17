# SimpleSuccessResponseDto

## Example Usage

```typescript
import { SimpleSuccessResponseDto } from "iris-sdk/models/components";

let value: SimpleSuccessResponseDto = {
  success: true,
  message: "RPA execution stopped successfully",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `success`                                | *boolean*                                | :heavy_check_mark:                       | Whether the operation was successful     | true                                     |
| `message`                                | *string*                                 | :heavy_minus_sign:                       | Optional message with additional details | RPA execution stopped successfully       |