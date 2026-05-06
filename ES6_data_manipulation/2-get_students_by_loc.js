export default function getListStudentsByLocation(arr, city) {
    return arr.filter((student) => student.location === city);
}
