import styles from "./FullComment.module.css";
const FullComment = () => {
  return (
    <div className={styles.fullComponent}>
      <p>UserName:</p>
      <p>Email:</p>
      <p>Body:</p>
    </div>
  );
};

export default FullComment;
