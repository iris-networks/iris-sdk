# iris-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *iris-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=iris-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/iris-ed/main). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Zenobia Intelligent Automation Platform API: 
Zenobia is an intelligent automation platform that learns from demonstrations and transforms them into robust workflows.

## Key Features
- **Demonstration-Based Learning**: Create automation by showing how tasks are performed
- **Video Analysis**: Convert screen recordings into precise automation instructions
- **Task Recording & Replay**: Record workflows and replay them with the same or different parameters
- **RPA Process Generation**: Automatically convert recordings into parameterized workflows
- **Action Caching**: Efficiently reuse automation steps across different tasks
- **Multi-operator Support**: Control browsers or native desktop applications

The API enables developers to create automation that can handle complex real-world tasks through a combination of visual analysis, session recording, and parameterized execution.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [iris-sdk](#iris-sdk)
  * [Key Features](#key-features)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.config.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [config](docs/sdks/config/README.md)

* [get](docs/sdks/config/README.md#get) - Get current configuration
* [update](docs/sdks/config/README.md#update) - Update configuration

### [files](docs/sdks/files/README.md)

* [upload](docs/sdks/files/README.md#upload) - Upload a file
* [list](docs/sdks/files/README.md#list) - List all uploaded files
* [getInfo](docs/sdks/files/README.md#getinfo) - Get information about a specific file
* [delete](docs/sdks/files/README.md#delete) - Delete a file
* [download](docs/sdks/files/README.md#download) - Download a file

### [humanLayer](docs/sdks/humanlayer/README.md)

* [getRequests](docs/sdks/humanlayer/README.md#getrequests) - Get all pending human layer requests
* [approve](docs/sdks/humanlayer/README.md#approve) - Approve a pending human layer request

### [irisArtifacts](docs/sdks/irisartifacts/README.md)

* [list](docs/sdks/irisartifacts/README.md#list) - List artifacts in a directory within the .iris folder
* [downloadFile](docs/sdks/irisartifacts/README.md#downloadfile) - Download a file artifact from the .iris folder
* [downloadFolder](docs/sdks/irisartifacts/README.md#downloadfolder) - Download a directory of artifacts as a zip file


### [operators](docs/sdks/operators/README.md)

* [getTypes](docs/sdks/operators/README.md#gettypes) - Get available operator types

### [rpa](docs/sdks/rpa/README.md)

* [startExecution](docs/sdks/rpa/README.md#startexecution) - Start RPA execution from a recording
* [stopExecution](docs/sdks/rpa/README.md#stopexecution) - Stop an ongoing RPA execution
* [getStatus](docs/sdks/rpa/README.md#getstatus) - Get status of an RPA execution
* [getParameterTemplate](docs/sdks/rpa/README.md#getparametertemplate) - Get parameter template for a recording
* [batchExecute](docs/sdks/rpa/README.md#batchexecute) - Execute RPA with multiple parameter sets

### [video](docs/sdks/video/README.md)

* [upload](docs/sdks/video/README.md#upload) - Upload a video for RPA analysis
* [getAnalysisResults](docs/sdks/video/README.md#getanalysisresults) - Get analysis results for a video
* [executeRpa](docs/sdks/video/README.md#executerpa) - Execute RPA steps from video analysis
* [streamProcessed](docs/sdks/video/README.md#streamprocessed)
* [streamOriginal](docs/sdks/video/README.md#streamoriginal)

### [videoEditing](docs/sdks/videoediting/README.md)

* [deleteFrame](docs/sdks/videoediting/README.md#deleteframe) - Delete a frame
* [updateCaption](docs/sdks/videoediting/README.md#updatecaption) - Update caption for a frame
* [regenerate](docs/sdks/videoediting/README.md#regenerate) - Regenerate video after edits

### [videos](docs/sdks/videos/README.md)

* [list](docs/sdks/videos/README.md#list) - List all recordings
* [getMetadata](docs/sdks/videos/README.md#getmetadata) - Get recording metadata
* [deleteRecording](docs/sdks/videos/README.md#deleterecording) - Delete recording by ID
* [getStatus](docs/sdks/videos/README.md#getstatus) - Get video generation status
* [getThumbnail](docs/sdks/videos/README.md#getthumbnail) - Get recording thumbnail
* [saveCurrentSession](docs/sdks/videos/README.md#savecurrentsession) - Save current session as a recording
* [getCurrentSessionData](docs/sdks/videos/README.md#getcurrentsessiondata) - Get video data for current session
* [getRecordingData](docs/sdks/videos/README.md#getrecordingdata) - Get video data for a specific recording
* [download](docs/sdks/videos/README.md#download) - Download recording as ZIP file
* [generate](docs/sdks/videos/README.md#generate) - Generate a video from the recording frames
* [stream](docs/sdks/videos/README.md#stream) - Stream the generated video file
* [getFramesAndCaptions](docs/sdks/videos/README.md#getframesandcaptions) - Get frames and captions for editing

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`configGet`](docs/sdks/config/README.md#get) - Get current configuration
- [`configUpdate`](docs/sdks/config/README.md#update) - Update configuration
- [`filesDelete`](docs/sdks/files/README.md#delete) - Delete a file
- [`filesDownload`](docs/sdks/files/README.md#download) - Download a file
- [`filesGetInfo`](docs/sdks/files/README.md#getinfo) - Get information about a specific file
- [`filesList`](docs/sdks/files/README.md#list) - List all uploaded files
- [`filesUpload`](docs/sdks/files/README.md#upload) - Upload a file
- [`humanLayerApprove`](docs/sdks/humanlayer/README.md#approve) - Approve a pending human layer request
- [`humanLayerGetRequests`](docs/sdks/humanlayer/README.md#getrequests) - Get all pending human layer requests
- [`irisArtifactsDownloadFile`](docs/sdks/irisartifacts/README.md#downloadfile) - Download a file artifact from the .iris folder
- [`irisArtifactsDownloadFolder`](docs/sdks/irisartifacts/README.md#downloadfolder) - Download a directory of artifacts as a zip file
- [`irisArtifactsList`](docs/sdks/irisartifacts/README.md#list) - List artifacts in a directory within the .iris folder
- [`operatorsGetTypes`](docs/sdks/operators/README.md#gettypes) - Get available operator types
- [`rpaBatchExecute`](docs/sdks/rpa/README.md#batchexecute) - Execute RPA with multiple parameter sets
- [`rpaGetParameterTemplate`](docs/sdks/rpa/README.md#getparametertemplate) - Get parameter template for a recording
- [`rpaGetStatus`](docs/sdks/rpa/README.md#getstatus) - Get status of an RPA execution
- [`rpaStartExecution`](docs/sdks/rpa/README.md#startexecution) - Start RPA execution from a recording
- [`rpaStopExecution`](docs/sdks/rpa/README.md#stopexecution) - Stop an ongoing RPA execution
- [`videoEditingDeleteFrame`](docs/sdks/videoediting/README.md#deleteframe) - Delete a frame
- [`videoEditingRegenerate`](docs/sdks/videoediting/README.md#regenerate) - Regenerate video after edits
- [`videoEditingUpdateCaption`](docs/sdks/videoediting/README.md#updatecaption) - Update caption for a frame
- [`videoExecuteRpa`](docs/sdks/video/README.md#executerpa) - Execute RPA steps from video analysis
- [`videoGetAnalysisResults`](docs/sdks/video/README.md#getanalysisresults) - Get analysis results for a video
- [`videosDeleteRecording`](docs/sdks/videos/README.md#deleterecording) - Delete recording by ID
- [`videosDownload`](docs/sdks/videos/README.md#download) - Download recording as ZIP file
- [`videosGenerate`](docs/sdks/videos/README.md#generate) - Generate a video from the recording frames
- [`videosGetCurrentSessionData`](docs/sdks/videos/README.md#getcurrentsessiondata) - Get video data for current session
- [`videosGetFramesAndCaptions`](docs/sdks/videos/README.md#getframesandcaptions) - Get frames and captions for editing
- [`videosGetMetadata`](docs/sdks/videos/README.md#getmetadata) - Get recording metadata
- [`videosGetRecordingData`](docs/sdks/videos/README.md#getrecordingdata) - Get video data for a specific recording
- [`videosGetStatus`](docs/sdks/videos/README.md#getstatus) - Get video generation status
- [`videosGetThumbnail`](docs/sdks/videos/README.md#getthumbnail) - Get recording thumbnail
- [`videosList`](docs/sdks/videos/README.md#list) - List all recordings
- [`videosSaveCurrentSession`](docs/sdks/videos/README.md#savecurrentsession) - Save current session as a recording
- [`videosStream`](docs/sdks/videos/README.md#stream) - Stream the generated video file
- [`videoStreamOriginal`](docs/sdks/video/README.md#streamoriginal)
- [`videoStreamProcessed`](docs/sdks/video/README.md#streamprocessed)
- [`videoUpload`](docs/sdks/video/README.md#upload) - Upload a video for RPA analysis

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

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
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK();

async function run() {
  const result = await irisSDK.config.get({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await irisSDK.config.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { IrisSDK } from "iris-sdk";
import { SDKValidationError } from "iris-sdk/models/errors";

const irisSDK = new IrisSDK();

async function run() {
  let result;
  try {
    result = await irisSDK.config.get();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof APIError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { IrisSDK } from "iris-sdk";

const irisSDK = new IrisSDK({
  serverURL: "http://0.0.0.0:3000",
});

async function run() {
  const result = await irisSDK.config.get();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { IrisSDK } from "iris-sdk";
import { HTTPClient } from "iris-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new IrisSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { IrisSDK } from "iris-sdk";

const sdk = new IrisSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `IRISSDK_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=iris-sdk&utm_campaign=typescript)
