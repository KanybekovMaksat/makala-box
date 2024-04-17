import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { EditorPage } from "./editor-page.ui";


export const editorPageRoute: RouteObject = {
    path:pathKeys.editor.root(),
    element:createElement(EditorPage)
}    