export const fakeApiOrigin = 'http://frontend-study.xenn.xyz';

export const fakeApiEndpoints = {
  init: `${fakeApiOrigin}/init`,
  login: `${fakeApiOrigin}/login`,
  logout: `${fakeApiOrigin}/logout`,
  home: `${fakeApiOrigin}/home`,
  category: `${fakeApiOrigin}/category`,
  catalog: `${fakeApiOrigin}/catalog`,
  cart: `${fakeApiOrigin}/cart`,
} as const;
