# ConfigResponseDto

## Example Usage

```typescript
import { ConfigResponseDto } from "iris-sdk/models/components";

let value: ConfigResponseDto = {
  vlmBaseUrl: "https://posh-stir-fry.name",
  vlmApiKey: "<value>",
  vlmModelName: "<value>",
  vlmProvider: "<value>",
  language: "<value>",
  defaultOperator: "browser",
  maxLoopCount: 7259.66,
  loopIntervalInMs: 7022.44,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `vlmBaseUrl`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | VLM Base URL                                                             |
| `vlmApiKey`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | VLM API Key                                                              |
| `vlmModelName`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | VLM Model Name                                                           |
| `vlmProvider`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | VLM Provider                                                             |
| `language`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Language                                                                 |
| `defaultOperator`                                                        | [components.DefaultOperator](../../models/components/defaultoperator.md) | :heavy_check_mark:                                                       | Default Operator Type                                                    |
| `maxLoopCount`                                                           | *number*                                                                 | :heavy_check_mark:                                                       | Maximum Loop Count                                                       |
| `loopIntervalInMs`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | Loop Interval in Milliseconds                                            |