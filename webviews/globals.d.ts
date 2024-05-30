import * as _vscode from "vscode";

declare global {
  const vscodeapi: {
    postMessage: ({ type: string, value: any }) => void;
  };
}
