/**
 * Get environment variables
 */
export function getEnv(): ImportMetaEnv {
  return import.meta.env
}

/**
 * Get base url
 */
export function getBaseUrl() {
  return import.meta.env.BASE_URL
}

/**
 * Is it a development mode
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * Is it a production mode
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
