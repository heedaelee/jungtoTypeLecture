import { StudentApiResponse } from "./api";

export interface DetailedStudent extends StudentApiResponse {
  gpa: number;
}

export const transformStudentData = <T extends StudentApiResponse>(
  data: T[],
  gpa: number
): DetailedStudent[] => {
  return data.map((item) => ({ ...item, gpa }));
};

//타입 단언 사용, 단언 사용 안해도 되는데 학습을 위해 예시를 만들어 봄 ㅎㅎ
export const getFirstStudentName = (data:any):string => {
  const firstStudent = data[0] as StudentApiResponse;
  return firstStudent.name;
}


