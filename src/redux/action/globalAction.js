export const setLoading = (payload) => {
  return {
    type: "SET_LOADING",
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: "SET_ERROR",
    payload,
  };
};
