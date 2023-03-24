import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  return !resId ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant id: {resId}</h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
