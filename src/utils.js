export const transformStudentData = (data, gpa) => {
  return data.map((item) => ({ ...item, gpa }));
};

//타입 단언 사용, 단언 사용 안해도 되는데 학습을 위해 예시를 만들어 봄 ㅎㅎ
export const getFirstStudentName = (data) => {
  const firstStudent = data[0];
  return firstStudent.name;
};
