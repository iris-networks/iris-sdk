# IrisArtifacts
(*irisArtifacts*)

## Overview

### Available Operations

* [list](#list) - List artifacts in a directory within the .iris folder
* [downloadFile](#downloadfile) - Download a file artifact from the .iris folder
* [downloadFolder](#downloadfolder) - Download a directory of artifacts as a zip file

## list

List artifacts in a directory within the .iris folder

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.irisArtifacts.list({
    path: "code/my-project",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { irisArtifactsList } from "iris-sdk/funcs/irisArtifactsList.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await irisArtifactsList(irisSDK, {
    path: "code/my-project",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListArtifactsRequest](../../models/operations/listartifactsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ArtifactsContentDto](../../models/components/artifactscontentdto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## downloadFile

Download a file artifact from the .iris folder

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  await irisSDK.irisArtifacts.downloadFile({
    path: "/usr/obj",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { irisArtifactsDownloadFile } from "iris-sdk/funcs/irisArtifactsDownloadFile.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await irisArtifactsDownloadFile(irisSDK, {
    path: "/usr/obj",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadArtifactFileRequest](../../models/operations/downloadartifactfilerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## downloadFolder

Download a directory of artifacts as a zip file

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  await irisSDK.irisArtifacts.downloadFolder({
    path: "/tmp",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { irisArtifactsDownloadFolder } from "iris-sdk/funcs/irisArtifactsDownloadFolder.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await irisArtifactsDownloadFolder(irisSDK, {
    path: "/tmp",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadArtifactFolderRequest](../../models/operations/downloadartifactfolderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |