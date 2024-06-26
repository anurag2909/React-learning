import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  );

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <h4>{avgRating} ({totalRatingsString}) - {costForTwoMessage}</h4> */}
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h4>{areaName}</h4>
      <h4>Menu</h4>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
