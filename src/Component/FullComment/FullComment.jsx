import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
import http from "../../services/httpServices";
import { getOneComment } from "../../services/getOneCommentServices";
import { deleteComment } from "../../services/deleteCommentServices";
import { getAllcomments } from "../../services/getAllCommentServices";
const FullComment = ({ match, history }) => {
  console.log("history", history);
  const [selectCommet, setSelectComment] = useState(null);
  const commentId = match.params.id;
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setSelectComment(res.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);
  const deleteHandler = async (id) => {
    try {
      await deleteComment(id);
      history.push("/");
    } catch (error) {
      console.log(error);
    }

    // http
    //   .delete(`
    //`/comments/${id}`)
    //   .then((res) => http.get("
    //  /comments"))
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
      <div className={styles.container}>
        <div className={styles.fullComponent}>
          <p>{selectCommet.name}</p>
          <p>{selectCommet.email}</p>
          <p>{selectCommet.body}</p>
          <button onClick={() => deleteHandler(selectCommet.id)}>Delete</button>
        </div>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
