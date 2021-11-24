import { useState } from "react";
import styles from "./NewComment.module.css";
import http from "../../services/httpServices";
import { getAllcomments } from "../../services/getAllCommentServices";
import { addNewCommentService } from "../../services/addNewCommentservice";

const NewComment = ({ history }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const AddCommentHandler = async () => {
    try {
      await addNewCommentService({ ...comment, postId: 10 });
      history.push("/");
    } catch (error) {
      console.log(error);
    }

    // http
    //   .post("
    //comments", {
    //     ...comment,
    //     postId: 10,
    //   })
    //   .then((res) => http.get("
    //comments"))
    //   .then((res) => props.setComment(res.data))
    //   .catch();
  };
  return (
    <div className={styles.newComment}>
      <div>
        <label>Name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>Content</label>
        <input type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={AddCommentHandler}>Add Comment</button>
    </div>
  );
};

export default NewComment;
