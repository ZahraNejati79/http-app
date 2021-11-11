import http from "./httpServices";
export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
