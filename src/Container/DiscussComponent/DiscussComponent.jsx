import CommentC from "../../Component/CommentC/CommentC";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import styles from "./DiscussComponent.module.css";
const DiscussComponent = () => {
  return (
    <div className={styles.discussComponent}>
      <section>
        <CommentC />
        <CommentC />
        <CommentC />
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </div>
  );
};

export default DiscussComponent;
