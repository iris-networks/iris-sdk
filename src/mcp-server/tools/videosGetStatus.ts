/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { videosGetStatus } from "../../funcs/videosGetStatus.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetVideoStatusRequest$inboundSchema,
};

export const tool$videosGetStatus: ToolDefinition<typeof args> = {
  name: "videos-get-status",
  description: `Get video generation status

Returns the current status of video generation for a recording. This endpoint provides detailed information about the video generation process, including whether it is pending, in progress, completed, or failed. Additional information is provided based on the status, such as start time, completion time, file format, size, and error messages if applicable.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await videosGetStatus(
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
