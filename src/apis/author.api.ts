import restConnector from "@/connectors/AxiosRestConnector";
import { isProduction } from "@/utils";

export const register = async (values: {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}) => {
  const { data } = await restConnector().post("/auth/register", {
    ...values,
  });

  return data;
};

export const login = async (values: { email: string; password: string }) => {
  const { data } = await restConnector().post("/auth/login", {
    ...values,
  });

  return data;
};

export const getCurrentUser = async (jwtToken?: string) => {
  try {
    const { data } = await restConnector(jwtToken).get("/auth/whoami");
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    if (!isProduction) console.log(error);
  }
};

export const verifyEmail = async (values: { token: string }) => {
  const { data } = await restConnector().post("/auth/verify-email", {
    token: values.token,
  });

  return data;
};

export const forgotPassword = async (values: { email: string }) => {
  const { data } = await restConnector().post("/auth/forgot-password", values);
  return data;
};

export const resendVerificationEmail = async (email: string) => {
  const { data } = await restConnector().post(`/auth/email/resend`, { email });
  return data;
};
