import * as XLSX from 'xlsx';

export const exportToExcel = (data: any[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance Data');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const prepareAttendanceData = (students: any[], attendanceRecords: any[]) => {
    return students.map(student => {
        const attendance = attendanceRecords.filter(record => record.studentId === student.id);
        return {
            Name: student.name,
            Group: student.group,
            PaymentStatus: student.paymentStatus,
            TotalAttendance: attendance.length,
            AttendanceDetails: attendance.map(record => ({
                ClassType: record.classType,
                Date: record.date,
                Present: record.present ? 'Yes' : 'No'
            }))
        };
    });
};