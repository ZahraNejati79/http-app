import axios from "axios";
import { useEffect, useState } from "react";
import CommentC from "../../Component/CommentC/CommentC";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import styles from "./DiscussComponent.module.css";
const DiscussComponent = () => {
  const [comment, setComment] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     setComment(response.data.slice(0, 3));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const getComment = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComment(data.slice(0, 4));
        console.log(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, []);
  const deleteHandler = (commentId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const selectComment = (id) => {
    console.log(id);
    setSelectedCommentId(id);
  };

  return (
    <div className={styles.discussComponent}>
      <section>
        {comment ? (
          comment.map((c) => (
            <CommentC
              key={c.id}
              name={c.name}
              email={c.email}
              clickHandler={() => selectComment(c.id)}
            />
          ))
        ) : (
          <p>loading ...</p>
        )}
      </section>
      <section>
        <FullComment
          commentId={selectedCommentId}
          deleteHandler={deleteHandler}
        />
      </section>
      <section>
        <NewComment />
      </section>
    </div>
  );
};

export default DiscussComponent;
