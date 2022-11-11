import styles from "../styles/Work.module.css";

function WorkCard({ project }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={project.owner.avatar_url} alt="" width={154} height={154} />
      </div>
      <h3>{project.name}</h3>
    </div>
  );
}

export default WorkCard;
