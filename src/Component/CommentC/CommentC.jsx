import styles from "./CommentC.module.css";
const CommentC = ({ name, email }) => {
  return (
    <div className={styles.comment}>
      <p>UserName:{name}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default CommentC;
