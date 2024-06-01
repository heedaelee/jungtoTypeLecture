import axios from "axios";

export const fetchStudentData = async () => {
  const respose = await axios.get("https://jsonplaceholder.typicode.com/users");
  return respose.data;
};
