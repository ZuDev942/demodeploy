export function getByName(cookies: string, cname: string) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(cookies);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // eslint-disable-next-line eqeqeq
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function get(cookieName: string) {
  return getByName(document.cookie, cookieName);
}

export function set(name: string, value: string | number, days: number) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

export function setAuthCookie(value: string | number, days: number) {
  set(import.meta.env.VITE_ACCESS_TOKEN_NAME, value, days);
}

export function deleteAuthCookie() {
  const accessTokenName = import.meta.env.VITE_ACCESS_TOKEN_NAME;
  // eslint-disable-next-line max-len
  document.cookie = `${accessTokenName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${
    import.meta.env.VITE_ACCESS_TOKEN_NAME
  }; path=/;`;
}
