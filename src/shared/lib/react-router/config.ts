export const pathKeys = {
  root: '/',
  login() {
    return pathKeys.root.concat('login/');
  },
  explore() {
    return pathKeys.root.concat('explore/');
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
