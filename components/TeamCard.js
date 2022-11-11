import Image from "next/image";
import styles from "../styles/Team.module.css";

function TeamCard({ item }) {
  return (
    <div className={styles.card}>
      <div>
        <Image
          className={styles.img}
          src={item.img}
          alt=""
          width={155}
          height={155}
        />
      </div>
      <h3>{item.name}</h3>
      <p>{item.title}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
    </div>
  );
}

export default TeamCard;
