import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
const FullComment = ({ commentId }) => {
  const [selectCommet, setSelectComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${commentId}`)
        .then((res) => setSelectComment(res.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  let commentDetail = <p>please select a comment !</p>;

  if (commentId) commentDetail = <p>loading</p>;

  if (selectCommet) {
    commentDetail = (
      <div className={styles.fullComponent}>
        <p>{selectCommet.name}</p>
        <p>{selectCommet.email}</p>
        <p>
          {selectCommet.company.name}
          {selectCommet.company.catchPhrase}
          {selectCommet.company.bs}
        </p>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
