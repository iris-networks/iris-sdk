# GetExecutionStatusRequest

## Example Usage

```typescript
import { GetExecutionStatusRequest } from "iris-sdk/models/operations";

let value: GetExecutionStatusRequest = {
  executionId: "rpa_1695872345678",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `executionId`                             | *string*                                  | :heavy_check_mark:                        | ID of the RPA execution to get status for | rpa_1695872345678                         |