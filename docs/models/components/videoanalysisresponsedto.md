# VideoAnalysisResponseDto

## Example Usage

```typescript
import { VideoAnalysisResponseDto } from "iris-sdk/models/components";

let value: VideoAnalysisResponseDto = {
  analysisId: "1682598432741",
  originalVideo: "recording-1682598432741.mp4",
  processedVideo: "processed-recording-1682598432741.mp4",
  message: "Video uploaded and analyzed successfully",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `analysisId`                                        | *string*                                            | :heavy_check_mark:                                  | Unique identifier for the analysis                  | 1682598432741                                       |
| `originalVideo`                                     | *string*                                            | :heavy_check_mark:                                  | Original uploaded video filename                    | recording-1682598432741.mp4                         |
| `processedVideo`                                    | *string*                                            | :heavy_check_mark:                                  | Processed video filename with idle sections removed | processed-recording-1682598432741.mp4               |
| `message`                                           | *string*                                            | :heavy_check_mark:                                  | Status message                                      | Video uploaded and analyzed successfully            |