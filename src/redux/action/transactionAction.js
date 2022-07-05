import transactionAPI from "../../services/api/transactionAPI";

export const postTransaction = (id, postData) => (dispatch) => {
  transactionAPI
    .postAll(id, postData)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};
