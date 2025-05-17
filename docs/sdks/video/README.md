# Video
(*video*)

## Overview

Learning from video recordings to generate automation steps

### Available Operations

* [upload](#upload) - Upload a video for RPA analysis
* [getAnalysisResults](#getanalysisresults) - Get analysis results for a video
* [executeRpa](#executerpa) - Execute RPA steps from video analysis
* [streamProcessed](#streamprocessed)
* [streamOriginal](#streamoriginal)

## upload

Upload a video recording of any task to automatically generate RPA workflows. The system learns from visual demonstration by analyzing screen recordings through computer vision. It identifies and extracts patterns of interaction including mouse movements, clicks, typing actions, and navigation sequences, converting them directly into executable automation without requiring manual scripting or programming.

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";
import { openAsBlob } from "node:fs";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.video.upload({
    file: await openAsBlob("example.file"),
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
import { videoUpload } from "iris-sdk/funcs/videoUpload.js";
import { openAsBlob } from "node:fs";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoUpload(irisSDK, {
    file: await openAsBlob("example.file"),
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
| `request`                                                                                                                                                                      | [components.VideoUploadDto](../../models/components/videouploaddto.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VideoAnalysisResponseDto](../../models/components/videoanalysisresponsedto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAnalysisResults

Get analysis results for a video

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.video.getAnalysisResults({
    id: "<id>",
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
import { videoGetAnalysisResults } from "iris-sdk/funcs/videoGetAnalysisResults.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoGetAnalysisResults(irisSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetAnalysisResultsRequest](../../models/operations/getanalysisresultsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RpaStepsDto](../../models/components/rpastepsdto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## executeRpa

Executes automation steps extracted from video analysis. This endpoint enables the system to perform actions it learned through visual observation. Using a reasoning-based approach, the automation adapts to dynamic UI elements and handles environmental variations while following the core workflow pattern. This creates resilient processes that maintain functionality even when the target system has minor visual or layout changes.

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  await irisSDK.video.executeRpa({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoExecuteRpa } from "iris-sdk/funcs/videoExecuteRpa.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoExecuteRpa(irisSDK, {
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ExecuteRpaStepsRequest](../../models/operations/executerpastepsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## streamProcessed

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  await irisSDK.video.streamProcessed({
    filename: "example.file",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoStreamProcessed } from "iris-sdk/funcs/videoStreamProcessed.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoStreamProcessed(irisSDK, {
    filename: "example.file",
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
| `request`                                                                                                                                                                      | [operations.StreamProcessedVideoRequest](../../models/operations/streamprocessedvideorequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## streamOriginal

### Example Usage

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  await irisSDK.video.streamOriginal({
    filename: "example.file",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoStreamOriginal } from "iris-sdk/funcs/videoStreamOriginal.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoStreamOriginal(irisSDK, {
    filename: "example.file",
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
| `request`                                                                                                                                                                      | [operations.StreamOriginalVideoRequest](../../models/operations/streamoriginalvideorequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |