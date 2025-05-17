# CaptionDataDto

## Example Usage

```typescript
import { CaptionDataDto } from "iris-sdk/models/components";

let value: CaptionDataDto = {
  timestamp: 1651234567890,
  conversation: {},
  frameIndex: 0,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `timestamp`                                                        | *number*                                                           | :heavy_check_mark:                                                 | Timestamp when the caption was created                             | 1651234567890                                                      |
| `conversation`                                                     | [components.Conversation](../../models/components/conversation.md) | :heavy_check_mark:                                                 | Conversation object containing the caption text and metadata       |                                                                    |
| `frameIndex`                                                       | *number*                                                           | :heavy_check_mark:                                                 | The index of the frame this caption belongs to                     | 0                                                                  |