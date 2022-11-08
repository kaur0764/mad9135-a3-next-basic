import Image from "next/image";
import Team from "../pages/team";
import styles from "../styles/Team.module.css";

function Card({ item }) {
  return (
    <div className={styles.card}>
      <div>
        <Image src={item.img} alt={item.name} width={154} height={154} />
      </div>
      <h2>{item.name}</h2>
      <p>{item.title}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </div>
  );
}

export default Card;
