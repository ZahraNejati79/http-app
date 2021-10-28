import styles from "./CommentC.module.css";
const CommentC = ({ name, email, clickHandler }) => {
  return (
    <div className={styles.comment} onClick={clickHandler}>
      <p>UserName:{name}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default CommentC;
