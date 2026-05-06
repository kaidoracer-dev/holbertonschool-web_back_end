export default function getListStudentsIdsSum(arr) {
    return arr.reduce((sum, student) => sum + student.id, 0);
}
