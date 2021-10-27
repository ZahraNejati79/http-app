import axios from "axios";
import { useEffect, useState } from "react";
import CommentC from "../../Component/CommentC/CommentC";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import styles from "./DiscussComponent.module.css";
const DiscussComponent = () => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setComment(response.data.slice(0, 3));
        console.log(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.discussComponent}>
      <section>
        {comment ? (
          comment.map((c) => (
            <CommentC key={c.id} name={c.name} email={c.email} />
          ))
        ) : (
          <p>loading ...</p>
        )}
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
