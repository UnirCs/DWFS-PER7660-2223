import { MyCardsProps } from "../utils/CardProps";
import CustomCard from "./customCard";

  const MyCards = ({ customCards }: MyCardsProps) => {
    return (
      <div className="row my-3 align-items-stretch">
        {customCards.map((card, index) => (
          <div key={index} className="col-4 mt-4">
            <CustomCard {...card} />
          </div>
        ))}
      </div>
    );
  };
  
  export default MyCards;