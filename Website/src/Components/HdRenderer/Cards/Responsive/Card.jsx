import CustomCard from "./CustomCard";
import Data from "../Data";

function Card() {
  return (
    <div className="container">
      <div className="row">
        {Data.map((card, index) => (
          <div key={index} className="col-sm-6 col-md-6 col-lg-4 mb-3">
            <CustomCard
              id={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;