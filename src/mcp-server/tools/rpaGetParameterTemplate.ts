/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { rpaGetParameterTemplate } from "../../funcs/rpaGetParameterTemplate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetParameterTemplateRequest$inboundSchema,
};

export const tool$rpaGetParameterTemplate: ToolDefinition<typeof args> = {
  name: "rpa-get-parameter-template",
  description: `Get parameter template for a recording

Returns a template with all parameterizable fields in a recording. This endpoint enables the core caching capability by extracting variable input points from recorded tasks. It identifies text entry fields, search queries, and other customizable elements that can be modified for each execution. This allows a single recorded workflow to be adapted for multiple scenarios without re-recording.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await rpaGetParameterTemplate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
