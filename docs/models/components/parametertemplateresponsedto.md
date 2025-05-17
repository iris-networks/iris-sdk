# ParameterTemplateResponseDto

## Example Usage

```typescript
import { ParameterTemplateResponseDto } from "iris-sdk/models/components";

let value: ParameterTemplateResponseDto = {
  recordingId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  parameterTemplate: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `recordingId`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The ID of the recording                                                                                                      | a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6                                                                                         |
| `parameterTemplate`                                                                                                          | [components.ParameterTemplate](../../models/components/parametertemplate.md)                                                 | :heavy_check_mark:                                                                                                           | Parameter template with parameterizable fields                                                                               | {<br/>"2.action_inputs.content": {<br/>"defaultValue": "Original text",<br/>"actionIndex": 2,<br/>"description": "Type action at step 3"<br/>}<br/>} |