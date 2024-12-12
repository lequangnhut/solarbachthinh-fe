import restConnector from "@/connectors/AxiosRestConnector";

export const changePassword = async (
  oldPassword: string,
  newPassword: string,
) => {
  const { data } = await restConnector().post(`/users/change-password`, {
    oldPassword,
    newPassword,
  });
  return data;
};
