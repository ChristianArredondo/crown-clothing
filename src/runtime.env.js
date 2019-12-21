import runtimeEnv from '@mars/heroku-js-runtime-env';

/**
 * Follows `create-creact-app` build-pack library
 * to set runtime environment variables
 * @see https://github.com/mars/create-react-app-buildpack#runtime-configuration
 */
export const env = runtimeEnv();
