/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { IrisSDKCore } from "../core.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get all pending human layer requests
 */
export function humanLayerGetRequests(
  client: IrisSDKCore,
  options?: RequestOptions,
): APIPromise<
  Result<
    void,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    options,
  ));
}

async function $do(
  client: IrisSDKCore,
  options?: RequestOptions,
): Promise<
  [
    Result<
      void,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const path = pathToFunc("/api/human-layer/requests")();

  const headers = new Headers(compactMap({
    Accept: "*/*",
  }));

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getRequests",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const [result] = await M.match<
    void,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, z.void()),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response);
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
