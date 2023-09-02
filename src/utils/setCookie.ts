export const setCookie = (name: string, value: any, days: number): void => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
  document.cookie = `${name}=${cookieValue}; path=/`;

  return;
}


export function getCookie(name: string) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookieParts = cookies[i].split('=');
    const cookieName = decodeURIComponent(cookieParts[0]);
    const cookieValue = decodeURIComponent(cookieParts[1]);
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}
export const removeTokenFromCookie = () => {
  const pastDate = new Date(0);
  document.cookie = "authToken=; expires=" + pastDate.toUTCString() + "; path=/";
}