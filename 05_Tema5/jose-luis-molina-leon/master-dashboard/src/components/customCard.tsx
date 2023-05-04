import { CustomCardProps } from "../utils/CardProps";

const CustomCard = ({ image, name, abbreviation, period }: CustomCardProps) => {

  let cardclass = period === '7660' ? 'card my-card': 'card my-card card-blue';
  return (
      <div className={cardclass}>
        <img className={"card-img-top"} src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{abbreviation}</h6>
          <p className="card-text">{period}</p>
        </div>
      </div>
  );
};

export default CustomCard;