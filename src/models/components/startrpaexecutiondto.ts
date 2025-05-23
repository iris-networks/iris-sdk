/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Optional parameter overrides for type actions
 */
export type ParameterOverrides = {};

export type StartRpaExecutionDto = {
  /**
   * The ID of the recording containing caption data
   */
  recordingId: string;
  /**
   * Optional delay between actions in milliseconds
   */
  actionDelay?: number | undefined;
  /**
   * Optional parameter overrides for type actions
   */
  parameterOverrides?: ParameterOverrides | undefined;
};

/** @internal */
export const ParameterOverrides$inboundSchema: z.ZodType<
  ParameterOverrides,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ParameterOverrides$Outbound = {};

/** @internal */
export const ParameterOverrides$outboundSchema: z.ZodType<
  ParameterOverrides$Outbound,
  z.ZodTypeDef,
  ParameterOverrides
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParameterOverrides$ {
  /** @deprecated use `ParameterOverrides$inboundSchema` instead. */
  export const inboundSchema = ParameterOverrides$inboundSchema;
  /** @deprecated use `ParameterOverrides$outboundSchema` instead. */
  export const outboundSchema = ParameterOverrides$outboundSchema;
  /** @deprecated use `ParameterOverrides$Outbound` instead. */
  export type Outbound = ParameterOverrides$Outbound;
}

export function parameterOverridesToJSON(
  parameterOverrides: ParameterOverrides,
): string {
  return JSON.stringify(
    ParameterOverrides$outboundSchema.parse(parameterOverrides),
  );
}

export function parameterOverridesFromJSON(
  jsonString: string,
): SafeParseResult<ParameterOverrides, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ParameterOverrides$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ParameterOverrides' from JSON`,
  );
}

/** @internal */
export const StartRpaExecutionDto$inboundSchema: z.ZodType<
  StartRpaExecutionDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  recordingId: z.string(),
  actionDelay: z.number().default(1000),
  parameterOverrides: z.lazy(() => ParameterOverrides$inboundSchema).optional(),
});

/** @internal */
export type StartRpaExecutionDto$Outbound = {
  recordingId: string;
  actionDelay: number;
  parameterOverrides?: ParameterOverrides$Outbound | undefined;
};

/** @internal */
export const StartRpaExecutionDto$outboundSchema: z.ZodType<
  StartRpaExecutionDto$Outbound,
  z.ZodTypeDef,
  StartRpaExecutionDto
> = z.object({
  recordingId: z.string(),
  actionDelay: z.number().default(1000),
  parameterOverrides: z.lazy(() => ParameterOverrides$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartRpaExecutionDto$ {
  /** @deprecated use `StartRpaExecutionDto$inboundSchema` instead. */
  export const inboundSchema = StartRpaExecutionDto$inboundSchema;
  /** @deprecated use `StartRpaExecutionDto$outboundSchema` instead. */
  export const outboundSchema = StartRpaExecutionDto$outboundSchema;
  /** @deprecated use `StartRpaExecutionDto$Outbound` instead. */
  export type Outbound = StartRpaExecutionDto$Outbound;
}

export function startRpaExecutionDtoToJSON(
  startRpaExecutionDto: StartRpaExecutionDto,
): string {
  return JSON.stringify(
    StartRpaExecutionDto$outboundSchema.parse(startRpaExecutionDto),
  );
}

export function startRpaExecutionDtoFromJSON(
  jsonString: string,
): SafeParseResult<StartRpaExecutionDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StartRpaExecutionDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StartRpaExecutionDto' from JSON`,
  );
}
