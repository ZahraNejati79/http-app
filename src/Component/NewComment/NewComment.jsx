import { useState } from "react";
import styles from "./NewComment.module.css";
const NewComment = () => {
  return (
    <div className={styles.newComment}>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>Content</label>
        <input type="text" />
      </div>
      <button>Add</button>
    </div>
  );
};

export default NewComment;
