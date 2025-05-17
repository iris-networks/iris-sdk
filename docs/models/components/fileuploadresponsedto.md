# FileUploadResponseDto

## Example Usage

```typescript
import { FileUploadResponseDto } from "iris-sdk/models/components";

let value: FileUploadResponseDto = {
  fileId: "1682598432741",
  fileName: "document-1682598432741.pdf",
  filePath: "/Users/username/.iris/files/document-1682598432741.pdf",
  fileUrl: "/api/files/download/document-1682598432741.pdf",
  fileSize: 24560,
  mimeType: "application/pdf",
  message: "File uploaded successfully",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `fileId`                                               | *string*                                               | :heavy_check_mark:                                     | Unique ID for the uploaded file                        | 1682598432741                                          |
| `fileName`                                             | *string*                                               | :heavy_check_mark:                                     | The filename with timestamp                            | document-1682598432741.pdf                             |
| `filePath`                                             | *string*                                               | :heavy_check_mark:                                     | The full file path                                     | /Users/username/.iris/files/document-1682598432741.pdf |
| `fileUrl`                                              | *string*                                               | :heavy_check_mark:                                     | URL to access the file                                 | /api/files/download/document-1682598432741.pdf         |
| `fileSize`                                             | *number*                                               | :heavy_check_mark:                                     | Size of the file in bytes                              | 24560                                                  |
| `mimeType`                                             | *string*                                               | :heavy_check_mark:                                     | MIME type of the file                                  | application/pdf                                        |
| `message`                                              | *string*                                               | :heavy_check_mark:                                     | Upload status message                                  | File uploaded successfully                             |