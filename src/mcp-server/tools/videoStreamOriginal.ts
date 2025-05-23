/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { videoStreamOriginal } from "../../funcs/videoStreamOriginal.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.StreamOriginalVideoRequest$inboundSchema,
};

export const tool$videoStreamOriginal: ToolDefinition<typeof args> = {
  name: "video-stream-original",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await videoStreamOriginal(
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

    return formatResult(void 0, apiCall);
  },
};
