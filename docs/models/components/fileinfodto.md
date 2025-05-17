# FileInfoDto

## Example Usage

```typescript
import { FileInfoDto } from "iris-sdk/models/components";

let value: FileInfoDto = {
  fileId: "1682598432741",
  fileName: "document-1682598432741.pdf",
  filePath: "/Users/username/.iris/files/document-1682598432741.pdf",
  fileUrl: "/api/files/download/document-1682598432741.pdf",
  fileSize: 24560,
  mimeType: "application/pdf",
  uploadDate: "2023-04-27T14:00:32.741Z",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `fileId`                                               | *string*                                               | :heavy_check_mark:                                     | Unique ID for the file                                 | 1682598432741                                          |
| `fileName`                                             | *string*                                               | :heavy_check_mark:                                     | The filename with timestamp                            | document-1682598432741.pdf                             |
| `filePath`                                             | *string*                                               | :heavy_check_mark:                                     | The full file path                                     | /Users/username/.iris/files/document-1682598432741.pdf |
| `fileUrl`                                              | *string*                                               | :heavy_check_mark:                                     | URL to access the file                                 | /api/files/download/document-1682598432741.pdf         |
| `fileSize`                                             | *number*                                               | :heavy_check_mark:                                     | Size of the file in bytes                              | 24560                                                  |
| `mimeType`                                             | *string*                                               | :heavy_check_mark:                                     | MIME type of the file                                  | application/pdf                                        |
| `uploadDate`                                           | *string*                                               | :heavy_check_mark:                                     | File upload date                                       | 2023-04-27T14:00:32.741Z                               |