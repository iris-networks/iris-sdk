# OperatorTypesDto

## Example Usage

```typescript
import { OperatorTypesDto } from "iris-sdk/models/components";

let value: OperatorTypesDto = {
  types: [
    "computer",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `types`                                                | [components.Types](../../models/components/types.md)[] | :heavy_check_mark:                                     | List of available operator types                       |