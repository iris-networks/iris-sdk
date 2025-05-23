/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Full caption object with predictionParsed and other data
 */
export type Caption = {};

export type UpdateCaptionDto = {
  /**
   * Full caption object with predictionParsed and other data
   */
  caption?: Caption | undefined;
  /**
   * New caption text (for backward compatibility)
   */
  text?: string | undefined;
};

/** @internal */
export const Caption$inboundSchema: z.ZodType<Caption, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Caption$Outbound = {};

/** @internal */
export const Caption$outboundSchema: z.ZodType<
  Caption$Outbound,
  z.ZodTypeDef,
  Caption
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Caption$ {
  /** @deprecated use `Caption$inboundSchema` instead. */
  export const inboundSchema = Caption$inboundSchema;
  /** @deprecated use `Caption$outboundSchema` instead. */
  export const outboundSchema = Caption$outboundSchema;
  /** @deprecated use `Caption$Outbound` instead. */
  export type Outbound = Caption$Outbound;
}

export function captionToJSON(caption: Caption): string {
  return JSON.stringify(Caption$outboundSchema.parse(caption));
}

export function captionFromJSON(
  jsonString: string,
): SafeParseResult<Caption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Caption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Caption' from JSON`,
  );
}

/** @internal */
export const UpdateCaptionDto$inboundSchema: z.ZodType<
  UpdateCaptionDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  caption: z.lazy(() => Caption$inboundSchema).optional(),
  text: z.string().optional(),
});

/** @internal */
export type UpdateCaptionDto$Outbound = {
  caption?: Caption$Outbound | undefined;
  text?: string | undefined;
};

/** @internal */
export const UpdateCaptionDto$outboundSchema: z.ZodType<
  UpdateCaptionDto$Outbound,
  z.ZodTypeDef,
  UpdateCaptionDto
> = z.object({
  caption: z.lazy(() => Caption$outboundSchema).optional(),
  text: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCaptionDto$ {
  /** @deprecated use `UpdateCaptionDto$inboundSchema` instead. */
  export const inboundSchema = UpdateCaptionDto$inboundSchema;
  /** @deprecated use `UpdateCaptionDto$outboundSchema` instead. */
  export const outboundSchema = UpdateCaptionDto$outboundSchema;
  /** @deprecated use `UpdateCaptionDto$Outbound` instead. */
  export type Outbound = UpdateCaptionDto$Outbound;
}

export function updateCaptionDtoToJSON(
  updateCaptionDto: UpdateCaptionDto,
): string {
  return JSON.stringify(
    UpdateCaptionDto$outboundSchema.parse(updateCaptionDto),
  );
}

export function updateCaptionDtoFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCaptionDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCaptionDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCaptionDto' from JSON`,
  );
}
