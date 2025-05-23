/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { videosList } from "../../funcs/videosList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$videosList: ToolDefinition = {
  name: "videos-list",
  description: `List all recordings

Returns a list of all video recordings available in the system`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await videosList(
      client,
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
