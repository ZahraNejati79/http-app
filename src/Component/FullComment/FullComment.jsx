import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
const FullComment = ({ commentId, setComment }) => {
  const [selectCommet, setSelectComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setSelectComment(res.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${id}`);
      const { data } = await axios.get("http://localhost:3001/comments");
      setSelectComment(null);
      setComment(data);
    } catch (error) {
      console.log(error);
    }

    // axios
    //   .delete(`http://localhost:3001/comments/${id}`)
    //   .then((res) => axios.get("http://localhost:3001/comments"))
    //   .then((res) => {
    //     setComment(res.data);
    //     setSelectComment(null);
    //   })
    //   .catch((error) => console.log(error));
  };

  let commentDetail = <p>please select a comment !</p>;

  if (commentId) commentDetail = <p>loading</p>;
  if (commentId && !selectCommet) {
    commentDetail = <p>please select a comment !</p>;
  }
  if (selectCommet) {
    commentDetail = (
      <div className={styles.fullComponent}>
        <p>{selectCommet.name}</p>
        <p>{selectCommet.email}</p>
        <p>{selectCommet.body}</p>
        <button onClick={() => deleteHandler(selectCommet.id)}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
