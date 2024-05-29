import * as _vscode from "vscode";

declare global {
  const vscodeapi: {
    postMessage: ({ command: string, value: any }) => void;
  };
}
