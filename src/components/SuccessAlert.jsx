import { useEffect } from "react";
export default function SuccessAlert({ isShow, setIsShow, message }) {
  const timer = setTimeout(() => {
    setIsShow(false);
  }, 2000);
  useEffect(() => {
    if (isShow === true) {
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timer, isShow]);
  return isShow ? (
    <div
      className="absolute z-10 left-0 right-0 p-4 mb-4 text-white bg-green-600 shadow-xl rounded-lg w-7/12 mx-auto flex justify-between"
      role="alert"
    >
      <p>
        <b>{message}</b>
      </p>
      <button className="" onClick={() => setIsShow(false)}>
        <b>X</b>
      </button>
    </div>
  ) : (
    <></>
  );
}
