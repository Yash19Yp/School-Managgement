import { apis } from "../service";
const API_URLS = {
  POST_CREATESTUDENT: "127.0.0.1:5000/admin/student/",
};

export const CREATE_STUDENT = (payload) =>
  apis.post(API_URLS.POST_CREATESTUDENT, {
    ...payload,
    headers: {
      ...payload?.headers,
    },
  });
