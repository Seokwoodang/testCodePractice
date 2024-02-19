import { useQuery } from "react-query";
import axios from "axios";

interface IFoodType {
  id: number;
  name: string;
  icon: string;
}

const useFoodTypeList = () => {
  return useQuery(["foodTypeList"], async () => {
    const { data } = await axios.get<IFoodType[]>(
      "/restaurant/food-type/"
    );
    return data;
  });
};

export default useFoodTypeList;
