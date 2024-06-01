<template>
  <div>
    <h1>학생 관리 프로그램</h1>
    <div v-if="students.length">
      <div v-for="student in students" :key="student.id">
        <h2>{{ student.name }}</h2>
        <p>{{ student.age }}</p>
        <p>{{ student.major }}</p>
        <p>{{ student.gpa }}</p>
      </div>
    </div>
    <div v-else>
      <p>학생 데이터를 불러오는 중입니다...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchStudentData, StudentApiResponse } from "@/api";
import { transformStudentData, DetailedStudent } from "@/utils";

const students = ref<DetailedStudent[]>([]);
const loadStudents = async () => {
  const data: StudentApiResponse[] = await fetchStudentData();
  students.value = transformStudentData(data, 4.0);
};

onMounted(() => {
  loadStudents();
});
</script>

<style>
h1 {
  text-align: center;
}
</style>
