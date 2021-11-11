import http from "./httpServices";
export function addNewCommentService(data) {
  return http.post("/comments", data);
}
