export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const match = newGrades.find((g) => g.studentId === student.id);

      return {
        ...student,
        grade: match ? match.grade : 'N/A',
      };
    });
}