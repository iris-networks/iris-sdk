# ArtifactItemDto

## Example Usage

```typescript
import { ArtifactItemDto } from "iris-sdk/models/components";

let value: ArtifactItemDto = {
  name: "my-project",
  type: "directory",
  size: 1024,
  modifiedAt: "2023-05-15T14:30:00.000Z",
  path: "code/my-project",
  extension: ".js",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the file or directory                      | my-project                                         |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | Type of the item (file or directory)               | directory                                          |
| `size`                                             | *number*                                           | :heavy_minus_sign:                                 | Size of the item in bytes (for files only)         | 1024                                               |
| `modifiedAt`                                       | *string*                                           | :heavy_check_mark:                                 | Last modified timestamp                            | 2023-05-15T14:30:00.000Z                           |
| `path`                                             | *string*                                           | :heavy_check_mark:                                 | Full path relative to .iris folder                 | code/my-project                                    |
| `extension`                                        | *string*                                           | :heavy_minus_sign:                                 | File extension (for files only)                    | .js                                                |