export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};

export const setError = (payload, message) => {
  return {
    type: "SET_ERROR",
    payload,
    message,
  };
};

export const setSuccess = (payload, message) => {
  return {
    type: "SET_SUCCESS",
    payload,
    message,
  };
};
