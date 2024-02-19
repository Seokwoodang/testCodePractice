import { useMutation } from "react-query";
import axios from "axios";
// import axiosClient from "../libs/axios";

export interface SignupProps {
  username: string;
  password: string;
}

const postSignup = async ({ username, password }: SignupProps) => {
  const { data } = await axios.post("/user/signup/", {
    email: username,
    password,
  });

  return data;
};

const useSignup = () =>
  useMutation(
    ["signUp"],
    async (SignupInfo: SignupProps) => postSignup(SignupInfo),
    {
      onError() {
        throw Error("Signup failed");
      },
    }
  );

export default useSignup;
