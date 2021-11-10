import axios from "axios";
import { useEffect, useState } from "react";
import CommentC from "../../Component/CommentC/CommentC";
import FullComment from "../../Component/FullComment/FullComment";
import NewComment from "../../Component/NewComment/NewComment";
import styles from "./DiscussComponent.module.css";
const DiscussComponent = () => {
  const [comment, setComment] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [error, setError] = useState(false);
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
        const { data } = await axios.get("http://localhost:3001/comments");
        console.log(data);
        setComment(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getComment();
  }, []);
  // const deleteHandler = (commentId) => {
  //   axios
  //     .delete(`http://localhost:3001/comments/${commentId}`)
  //     .then((res) => axios.get("http://localhost:3001/comments"))
  //     .then((res) => setComment(res.data))
  //     .catch((error) => console.log(error));
  // };
  const selectComment = (id) => {
    console.log(id);
    setSelectedCommentId(id);
  };

  const errorHandler = () => {
    {
      let commentError = <p>loading</p>;
      if (error) {
        commentError = <p>fetching data failed :\</p>;
      }
      if (comment && !error) {
        commentError = comment.map((c) => (
          <CommentC
            key={c.id}
            name={c.name}
            email={c.email}
            clickHandler={() => selectComment(c.id)}
          />
        ));
      }
      return commentError;
    }
  };

  return (
    <div className={styles.discussComponent}>
      <section>{errorHandler()}</section>
      <section>
        <FullComment
          commentId={selectedCommentId}
          // deleteHandler={deleteHandler}
          setComment={setComment}
        />
      </section>
      <section>
        <NewComment setComment={setComment} />
      </section>
    </div>
  );
};

export default DiscussComponent;
