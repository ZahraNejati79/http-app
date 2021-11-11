import http from "./httpServices";
export function getAllcomments() {
  return http.get("/comments");
}
