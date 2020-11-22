const getUserName = (store) => store.auth.user.name;
const getUserEmail = (store) => store.auth.user.email;
// const getUserAvatar = (store) => store.auth.user.avatar;
const getUserAvatar = (store) =>
  "https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg";
const isAuthenticated = (store) => store.auth.token;
const isLoading = (store) => store.auth.loading;
const isDarkTheme = (store) => store.auth.isDarkTheme;
const isLanguageUA = (store) => store.auth.isLanguageUA;

export default {
  getUserName,
  getUserEmail,
  getUserAvatar,
  isAuthenticated,
  isLoading,
  isDarkTheme,
  isLanguageUA,
};
