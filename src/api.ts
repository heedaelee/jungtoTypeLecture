import axios from "axios";

export interface StudentApiResponse {
  id: number;
  name: string;
  age: number;
  major: string;
}

export const fetchStudentData = async (): Promise<StudentApiResponse[]> => {
  const respose = await axios.get<StudentApiResponse[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return respose.data;
};
