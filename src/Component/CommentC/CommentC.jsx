import styles from "./CommentC.module.css";
const CommentC = ({ name, email, clickHandler }) => {
  return (
    <div className={styles.comment} onClick={clickHandler}>
      {console.log({ name })}
      <p>UserName:{name}</p>
      <p>Email:{email}</p>
    </div>
  );
};

export default CommentC;
