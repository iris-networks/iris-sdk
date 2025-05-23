/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type StreamOriginalVideoRequest = {
  filename: string;
};

/** @internal */
export const StreamOriginalVideoRequest$inboundSchema: z.ZodType<
  StreamOriginalVideoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  filename: z.string(),
});

/** @internal */
export type StreamOriginalVideoRequest$Outbound = {
  filename: string;
};

/** @internal */
export const StreamOriginalVideoRequest$outboundSchema: z.ZodType<
  StreamOriginalVideoRequest$Outbound,
  z.ZodTypeDef,
  StreamOriginalVideoRequest
> = z.object({
  filename: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamOriginalVideoRequest$ {
  /** @deprecated use `StreamOriginalVideoRequest$inboundSchema` instead. */
  export const inboundSchema = StreamOriginalVideoRequest$inboundSchema;
  /** @deprecated use `StreamOriginalVideoRequest$outboundSchema` instead. */
  export const outboundSchema = StreamOriginalVideoRequest$outboundSchema;
  /** @deprecated use `StreamOriginalVideoRequest$Outbound` instead. */
  export type Outbound = StreamOriginalVideoRequest$Outbound;
}

export function streamOriginalVideoRequestToJSON(
  streamOriginalVideoRequest: StreamOriginalVideoRequest,
): string {
  return JSON.stringify(
    StreamOriginalVideoRequest$outboundSchema.parse(streamOriginalVideoRequest),
  );
}

export function streamOriginalVideoRequestFromJSON(
  jsonString: string,
): SafeParseResult<StreamOriginalVideoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StreamOriginalVideoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StreamOriginalVideoRequest' from JSON`,
  );
}
