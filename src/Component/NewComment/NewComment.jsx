import axios from "axios";
import { useState } from "react";
import styles from "./NewComment.module.css";
const NewComment = (props) => {
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
      await axios.post("http://localhost:3001/comments", {
        ...comment,
        postId: 10,
      });
      const { data } = await axios.get("http://localhost:3001/comments");
      props.setComment(data);
    } catch (error) {
      console.log(error);
    }

    // axios
    //   .post("http://localhost:3001/comments", {
    //     ...comment,
    //     postId: 10,
    //   })
    //   .then((res) => axios.get("http://localhost:3001/comments"))
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
