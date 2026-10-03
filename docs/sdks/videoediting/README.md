# VideoEditing

## Overview

### Available Operations

* [deleteFrame](#deleteframe) - Delete a frame
* [updateCaption](#updatecaption) - Update caption for a frame
* [regenerate](#regenerate) - Regenerate video after edits

## deleteFrame

Deletes a specific frame from a recording and updates captions accordingly

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteFrame" method="delete" path="/api/videos/{id}/frames/{frameIndex}" -->
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.videoEditing.deleteFrame({
    id: "<id>",
    frameIndex: 1580.86,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoEditingDeleteFrame } from "iris-sdk/funcs/videoEditingDeleteFrame.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoEditingDeleteFrame(irisSDK, {
    id: "<id>",
    frameIndex: 1580.86,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoEditingDeleteFrame failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFrameRequest](../../models/operations/deleteframerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SuccessResponseDto](../../models/components/successresponsedto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCaption

Updates the caption text for a specific frame

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCaption" method="put" path="/api/videos/{id}/captions/{frameIndex}" -->
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.videoEditing.updateCaption({
    id: "<id>",
    frameIndex: 2353.28,
    updateCaptionDto: {
      caption: {},
      text: "New caption text here",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoEditingUpdateCaption } from "iris-sdk/funcs/videoEditingUpdateCaption.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoEditingUpdateCaption(irisSDK, {
    id: "<id>",
    frameIndex: 2353.28,
    updateCaptionDto: {
      caption: {},
      text: "New caption text here",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoEditingUpdateCaption failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCaptionRequest](../../models/operations/updatecaptionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SuccessResponseDto](../../models/components/successresponsedto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## regenerate

Regenerates the video file after frames or captions have been edited

### Example Usage

<!-- UsageSnippet language="typescript" operationID="regenerateVideo" method="post" path="/api/videos/{id}/regenerate" -->
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.videoEditing.regenerate({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { IrisSDKCore } from "iris-sdk/core.js";
import { videoEditingRegenerate } from "iris-sdk/funcs/videoEditingRegenerate.js";

// Use `IrisSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const irisSDK = new IrisSDKCore();

async function run() {
  const res = await videoEditingRegenerate(irisSDK, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoEditingRegenerate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RegenerateVideoRequest](../../models/operations/regeneratevideorequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SuccessResponseDto](../../models/components/successresponsedto.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |