import restConnector from "@/connectors/AxiosRestConnector";
import { isProduction } from "@/utils";

export const getCategoriesList = async () => {
  try {
    const { data } = await restConnector().get("/categories");
    if (data.success) {
      return data.data;
    }
    return null;
  } catch (error) {
    if (!isProduction) console.log(error);
  }
};
