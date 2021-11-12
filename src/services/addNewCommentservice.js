import http from "./httpServices";
export function addNewCommentService(data) {
  const token = "SECURE TOKEN !";
  const header = {
    header: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
