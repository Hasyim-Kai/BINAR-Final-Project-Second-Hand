import { useState } from "react";

export default function SuccessAlert({ showAlert = false }) {
    const [isShow, setIsShow] = useState(showAlert)

    return isShow ? <div className="absolute left-0 right-0 p-4 mb-4 text-white bg-green-600 shadow-xl rounded-lg w-7/12 mx-auto flex justify-between" role="alert">
        <p><b>Add Product Success!</b></p> <button className="" onClick={() => setIsShow(false)}><b>X</b></button>
    </div> : <></>
}