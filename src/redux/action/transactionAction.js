import transactionAPI from "../../services/api/transactionAPI";
import { setSuccess } from "./globalAction";

export const postTransaction = (id, postData, navigate) => (dispatch) => {
  console.log(`isi id ${id}, post data ${postData}`);
  transactionAPI
    .postAll(id, postData)
    .then((res) => {
      console.log(res.response);
      // navigate("/");
      dispatch(setSuccess(true, "success adding to wistlist"));
    })
    .catch((res) => {
      console.log(res);
    });
};
