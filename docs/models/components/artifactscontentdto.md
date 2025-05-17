# ArtifactsContentDto

## Example Usage

```typescript
import { ArtifactsContentDto } from "iris-sdk/models/components";

let value: ArtifactsContentDto = {
  currentPath: "code/my-project",
  parentPath: "code",
  items: [
    {
      name: "my-project",
      type: "directory",
      size: 1024,
      modifiedAt: "2023-05-15T14:30:00.000Z",
      path: "code/my-project",
      extension: ".js",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `currentPath`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Current path being listed                                                  | code/my-project                                                            |
| `parentPath`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Parent path if available                                                   | code                                                                       |
| `items`                                                                    | [components.ArtifactItemDto](../../models/components/artifactitemdto.md)[] | :heavy_check_mark:                                                         | List of files and directories                                              |                                                                            |