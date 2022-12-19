import React from "react";
import { useForm } from "react-hook-form";
import s from "./Login.module.css";
import { Navigate } from "react-router-dom";
import {authLoginThunk} from "../../Reduxe/auth-reducer";
import {logDOM} from "@testing-library/react";

const Login = (props) => {
  console.log("Login:", props);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    clearErrors
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    props.authLoginThunk(data.email, data.password,setError);
    reset();
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div></div>
        <div>
          <input
            {...register("email", {
              required: "Поле обязательно для ввода",
              minLength: {
                value: 5,
                message: "Минумум 5 символов"
              }
            })}
            placeholder={"Email"}
            onFocus={()=>clearErrors()}
          />
          <br />
          <div>
            {errors?.email && (
              <p className={s.paragraf}>{errors?.email?.message || "ERRORS"}</p>
            )}
          </div>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder={"Password"}
            onFocus={()=>clearErrors()}
          />{" "}
          <br />
          <input {...register("rememberMe")} type="checkbox" />
          Remember me
        </div>
        {errors.server && ( <p className={s.paragraf}>{errors.server.message}</p>)}
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
