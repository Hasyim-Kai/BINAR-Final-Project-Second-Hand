import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FailAlert from "../components/FailAlert";
import { LoginAction } from "../redux/action/authAction";
import useForm from "../utility/UseForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const inputStyle = `rounded-xl px-3 py-2 border w-full mt-1`;

  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate, () => setAlert(true)));
  };

  useEffect(() => {
    const token = localStorage.getItem("user:token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:inline-block h-screen">
        <img
          className="object-cover h-full w-full"
          src="/images/login_register_banner.png"
          alt="banner"
        />
      </div>
      {alert && <FailAlert showAlert={true} message={"Login is failed"} />}
      <section className="flex flex-col items-center justify-center mx-auto">
        <form onSubmit={login} className="lg:w-96 w-72">
          <h1 className="mb-5 text-xl">
            <b>Masuk</b>
          </h1>

          <div className="mb-5">
            <label>Email</label>
            <br />
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
              value={form.email}
              onChange={(e) => setForm("email", e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label>Password</label>
            <br />
            <input
              className={inputStyle}
              value={form.password}
              onChange={(e) => setForm("password", e.target.value)}
              type="password"
              name="password"
              placeholder="6+ karakter"
              required
            />
          </div>

          <button
            className={`h-10 py-2 px-3 text-white bg-primaryPurple rounded-xl w-full`}
          >
            Masuk
          </button>

          <div className="text-center mt-5">
            <span>Belum punya akun? </span>
            <Link className="text-primaryPurple" to="/register">
              <b>Daftar disini</b>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
