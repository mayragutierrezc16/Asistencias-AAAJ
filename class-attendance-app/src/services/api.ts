import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Function to get the list of students
export const getStudents = async () => {
    const response = await axios.get(`${API_BASE_URL}/students`);
    return response.data;
};

// Function to add a new student
export const addStudent = async (studentData) => {
    const response = await axios.post(`${API_BASE_URL}/students`, studentData);
    return response.data;
};

// Function to mark attendance for a class
export const markAttendance = async (attendanceData) => {
    const response = await axios.post(`${API_BASE_URL}/attendance`, attendanceData);
    return response.data;
};

// Function to get attendance records
export const getAttendance = async () => {
    const response = await axios.get(`${API_BASE_URL}/attendance`);
    return response.data;
};

// Function to get attendance report
export const getAttendanceReport = async (filters) => {
    const response = await axios.get(`${API_BASE_URL}/attendance/report`, { params: filters });
    return response.data;
};

// Function to update payment status
export const updatePaymentStatus = async (studentId, paymentData) => {
    const response = await axios.put(`${API_BASE_URL}/students/${studentId}/payment`, paymentData);
    return response.data;
};