# StopExecutionRequest

## Example Usage

```typescript
import { StopExecutionRequest } from "iris-sdk/models/operations";

let value: StopExecutionRequest = {
  executionId: "rpa_1695872345678",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `executionId`                   | *string*                        | :heavy_check_mark:              | ID of the RPA execution to stop | rpa_1695872345678               |