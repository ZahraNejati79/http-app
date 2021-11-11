import http from "./httpServices";
export function getOneComment(id) {
  return http.get(`/comments/${id}`);
}
