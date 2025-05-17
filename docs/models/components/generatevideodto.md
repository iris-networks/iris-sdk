# GenerateVideoDto

## Example Usage

```typescript
import { GenerateVideoDto } from "iris-sdk/models/components";

let value: GenerateVideoDto = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `fps`                                                                 | *number*                                                              | :heavy_minus_sign:                                                    | Frames per second for the generated video (0.2 = 5 seconds per frame) | 0.2                                                                   |
| `captionsEnabled`                                                     | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether to include captions in the video                              | true                                                                  |
| `format`                                                              | [components.Format](../../models/components/format.md)                | :heavy_minus_sign:                                                    | Video format to generate                                              | mp4                                                                   |
| `quality`                                                             | [components.Quality](../../models/components/quality.md)              | :heavy_minus_sign:                                                    | Video quality level                                                   | medium                                                                |