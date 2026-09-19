# StartRpaExecutionDto

## Example Usage

```typescript
import { StartRpaExecutionDto } from "iris-sdk/models/components";

let value: StartRpaExecutionDto = {
  recordingId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  actionDelay: 1500,
  parameterOverrides: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `recordingId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the recording containing caption data                                | a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6                                           |
| `actionDelay`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | Optional delay between actions in milliseconds                                 | 1500                                                                           |
| `parameterOverrides`                                                           | [components.ParameterOverrides](../../models/components/parameteroverrides.md) | :heavy_minus_sign:                                                             | Optional parameter overrides for type actions                                  | {<br/>"2.action_inputs.content": "Parameterized text input"<br/>}              |