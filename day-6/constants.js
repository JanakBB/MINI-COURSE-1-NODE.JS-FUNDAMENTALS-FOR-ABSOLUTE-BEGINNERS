export const API_BASE_URI = "https://api.example.com";
export const DEFAULT_TIMEOUT = 5000;
export const MAX_RETURNS = 3;

// Grouped exports
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  NETWORK: "Network error occurred",
  TIMEOUT: "Request timed out",
  UNAUTHORIZED: "Please log in again",
};

export { HTTP_STATUS, ERROR_MESSAGES };
