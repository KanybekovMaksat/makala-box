export const pathKeys = {
  root: '/',
  login() {
    return pathKeys.root.concat('login/');
  },
  feed() {
    return pathKeys.root.concat('feed/');
  },
  favorites() {
    return pathKeys.root.concat('favorites/');
  },
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
  article: {
    root() {
      return pathKeys.root.concat('article/');
    },
  },
  profile: {
    root() {
      return pathKeys.root.concat('profile/');
    },
  },
};
