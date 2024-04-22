import { createElement } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';
import { EditorPage } from './editor-page.ui';
import { getCookie } from 'typescript-cookie';

export const editorPageRoute: RouteObject = {
  path: pathKeys.editor.root(),
  element: createElement(EditorPage),
  loader: async (args) => {
    if (!getCookie('access')) {
      return redirect(pathKeys.login());
    }
    return args;
  },
};
