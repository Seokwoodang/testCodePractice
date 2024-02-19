import { useQuery } from "react-query";
import axios from "axios";
import { IRestaurant } from "../libs/order";

const useRestaurantList = (foodTypeId: number) => {
  return useQuery(
    ["restaurantList"],
    async () => {
      const { data } = await axios.get<IRestaurant[]>(
        `/restaurant/food-type/${foodTypeId}`
      );
      return data;
    },
    {}
  );
};

export default useRestaurantList;
