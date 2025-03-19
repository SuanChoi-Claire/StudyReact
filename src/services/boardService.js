import axios from "axios";

const API_URL = "http://localhost:8080/board"; // 백엔드 API 주소 연결점

export const fetchBoards = async (params) => {
  const response = await axios.get(API_URL, { params });
  //axios 는 서버에서 받은 값을 Json으로 준다.  data 키안에 담는다.
  //params  는 없어도 됨
  console.log("*************Server Response***************\n", response);
  // console.log("fetchBoards Call!!");
  // const dummy =
  //   '{"data": {"content":[{"writer":"test1","title":"Test Title1"},{"writer":"test2","title":"Test Title2"}],"totalPages":1}}';
  // console.log(dummy);
  // const response = JSON.parse(dummy);
  // console.log(response.data);
  return response.data;
  //response 에 있는 데이터만 보낼꺼야.
};

export const fetchBoardDetail = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log("************Server Response***************\n", response);
  // const dummy =
  //   '{"data": {"content":{"writer":"test1","title":"Test Title1"},"totalPages":1}}';
  // const response = JSON.parse(dummy);
  return response.data;
};

export const updateBoard = async (id, boardData) => {
  const response = await axios.put(`${API_URL}/${id}`, boardData);
  return response.data;
};

export const createBoard = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
