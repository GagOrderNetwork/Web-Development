// Load configuration from a global "env" object
const ENV = (global && global.ENV) || (process && process.env) || {};

// Apply environment configs and defaults
const config = {
  // Defaults for unit test configuration...
  brand: ENV.BRAND || ENV.brand || "local",
  stage: ENV.STAGE || ENV.stage || "test",
};

// Share the applied configs
export default config;
