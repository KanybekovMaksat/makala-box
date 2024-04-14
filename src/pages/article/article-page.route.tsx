import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { pathKeys } from "~shared/lib/react-router";
import { ArticlePage } from "./article-page.ui";

export const articlePageRoute: RouteObject = {
    path:pathKeys.article.root(),
    element:createElement(ArticlePage)
}    