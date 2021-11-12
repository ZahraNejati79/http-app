import http from "./httpServices";
export function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
// import instance from "./axiosInstance";
// export function deleteComment(id) {
//   return instance.delete(`/comments/${id}`);
// }
