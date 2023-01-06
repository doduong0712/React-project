import { Monster } from "../../App";
import CardComponent from "../card/card.component";

import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[]
}

const cardListComponent = ({ monsters }: CardListProps) => {
  // console.log(this.props);
  // console.log("render");
  // const { monsters } = this.props; //Các component cũng sẽ render nếu props thay đổi
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardComponent monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default cardListComponent;
