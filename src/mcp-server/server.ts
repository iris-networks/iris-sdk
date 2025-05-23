/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IrisSDKCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$configGet } from "./tools/configGet.js";
import { tool$configUpdate } from "./tools/configUpdate.js";
import { tool$filesDelete } from "./tools/filesDelete.js";
import { tool$filesDownload } from "./tools/filesDownload.js";
import { tool$filesGetInfo } from "./tools/filesGetInfo.js";
import { tool$filesList } from "./tools/filesList.js";
import { tool$filesUpload } from "./tools/filesUpload.js";
import { tool$humanLayerApprove } from "./tools/humanLayerApprove.js";
import { tool$humanLayerGetRequests } from "./tools/humanLayerGetRequests.js";
import { tool$irisArtifactsDownloadFile } from "./tools/irisArtifactsDownloadFile.js";
import { tool$irisArtifactsDownloadFolder } from "./tools/irisArtifactsDownloadFolder.js";
import { tool$irisArtifactsList } from "./tools/irisArtifactsList.js";
import { tool$operatorsGetTypes } from "./tools/operatorsGetTypes.js";
import { tool$rpaBatchExecute } from "./tools/rpaBatchExecute.js";
import { tool$rpaGetParameterTemplate } from "./tools/rpaGetParameterTemplate.js";
import { tool$rpaGetStatus } from "./tools/rpaGetStatus.js";
import { tool$rpaStartExecution } from "./tools/rpaStartExecution.js";
import { tool$rpaStopExecution } from "./tools/rpaStopExecution.js";
import { tool$videoEditingDeleteFrame } from "./tools/videoEditingDeleteFrame.js";
import { tool$videoEditingRegenerate } from "./tools/videoEditingRegenerate.js";
import { tool$videoEditingUpdateCaption } from "./tools/videoEditingUpdateCaption.js";
import { tool$videoExecuteRpa } from "./tools/videoExecuteRpa.js";
import { tool$videoGetAnalysisResults } from "./tools/videoGetAnalysisResults.js";
import { tool$videosDeleteRecording } from "./tools/videosDeleteRecording.js";
import { tool$videosDownload } from "./tools/videosDownload.js";
import { tool$videosGenerate } from "./tools/videosGenerate.js";
import { tool$videosGetCurrentSessionData } from "./tools/videosGetCurrentSessionData.js";
import { tool$videosGetFramesAndCaptions } from "./tools/videosGetFramesAndCaptions.js";
import { tool$videosGetMetadata } from "./tools/videosGetMetadata.js";
import { tool$videosGetRecordingData } from "./tools/videosGetRecordingData.js";
import { tool$videosGetStatus } from "./tools/videosGetStatus.js";
import { tool$videosGetThumbnail } from "./tools/videosGetThumbnail.js";
import { tool$videosList } from "./tools/videosList.js";
import { tool$videosSaveCurrentSession } from "./tools/videosSaveCurrentSession.js";
import { tool$videosStream } from "./tools/videosStream.js";
import { tool$videoStreamOriginal } from "./tools/videoStreamOriginal.js";
import { tool$videoStreamProcessed } from "./tools/videoStreamProcessed.js";
import { tool$videoUpload } from "./tools/videoUpload.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "IrisSDK",
    version: "0.2.1",
  });

  const client = new IrisSDKCore({
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$configGet);
  tool(tool$configUpdate);
  tool(tool$videosList);
  tool(tool$videosGetMetadata);
  tool(tool$videosDeleteRecording);
  tool(tool$videosGetStatus);
  tool(tool$videosGetThumbnail);
  tool(tool$videosSaveCurrentSession);
  tool(tool$videosGetCurrentSessionData);
  tool(tool$videosGetRecordingData);
  tool(tool$videosDownload);
  tool(tool$videosGenerate);
  tool(tool$videosStream);
  tool(tool$videosGetFramesAndCaptions);
  tool(tool$videoEditingDeleteFrame);
  tool(tool$videoEditingUpdateCaption);
  tool(tool$videoEditingRegenerate);
  tool(tool$operatorsGetTypes);
  tool(tool$rpaStartExecution);
  tool(tool$rpaStopExecution);
  tool(tool$rpaGetStatus);
  tool(tool$rpaGetParameterTemplate);
  tool(tool$rpaBatchExecute);
  tool(tool$videoUpload);
  tool(tool$videoGetAnalysisResults);
  tool(tool$videoExecuteRpa);
  tool(tool$videoStreamProcessed);
  tool(tool$videoStreamOriginal);
  tool(tool$filesUpload);
  tool(tool$filesList);
  tool(tool$filesGetInfo);
  tool(tool$filesDelete);
  tool(tool$filesDownload);
  tool(tool$humanLayerGetRequests);
  tool(tool$humanLayerApprove);
  tool(tool$irisArtifactsList);
  tool(tool$irisArtifactsDownloadFile);
  tool(tool$irisArtifactsDownloadFolder);

  return server;
}
