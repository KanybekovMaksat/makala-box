export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root;
  },
  register() {
    return pathKeys.root.concat('register/');
  },
  login() {
    return pathKeys.root.concat('login/');
  },
  verify() {
    return pathKeys.root.concat('/otp/verify');
  },
  feed() {
    return pathKeys.root.concat('feed/');
  },
  favorites() {
    return pathKeys.root.concat('favorites/');
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
  article: {
    root() {
      return pathKeys.root.concat('article/');
    },
  },
  editor: {
    root() {
      return pathKeys.root.concat('sandbox/');
    },
  },
  profile: {
    root() {
      return pathKeys.root.concat('profile/');
    },
  },
};
