import {Monster} from '../../App'

import "./card.styles.css";

type CardProps = {
  monster: Monster;
}

const CardComponent = ({ monster}: CardProps ) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monsters ${name}`}
        src={`https://robohash.org/${id + 100}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardComponent;
