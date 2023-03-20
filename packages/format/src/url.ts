export function addHttps(websiteDomain: string) {
  return /^https?:\/\//.test(websiteDomain) ? websiteDomain : `https://${websiteDomain}`;
}
