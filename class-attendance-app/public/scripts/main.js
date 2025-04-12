document.addEventListener('DOMContentLoaded', () => {
    const studentGroups = ["C", "B", "A y WS"];
    const classTypes = ["Especiales", "Off Skate", "Generales"];
    
    const attendanceForm = document.getElementById('attendance-form');
    const studentList = document.getElementById('student-list');
    const downloadReportButton = document.getElementById('download-report');

    // Function to handle attendance submission
    attendanceForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(attendanceForm);
        const attendanceData = {};
        
        formData.forEach((value, key) => {
            attendanceData[key] = value;
        });

        // Call API to save attendance data
        saveAttendance(attendanceData);
    });

    // Function to save attendance data
    function saveAttendance(data) {
        fetch('/api/attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('Attendance saved successfully!');
            // Optionally refresh the attendance list
            loadAttendance();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // Function to load students
    function loadStudents() {
        fetch('/api/students')
            .then(response => response.json())
            .then(data => {
                studentList.innerHTML = '';
                data.forEach(student => {
                    const li = document.createElement('li');
                    li.textContent = `${student.name} - ${student.paymentStatus}`;
                    studentList.appendChild(li);
                });
            })
            .catch((error) => {
                console.error('Error loading students:', error);
            });
    }

    // Function to download report
    downloadReportButton.addEventListener('click', () => {
        const dateRange = document.getElementById('date-range').value;
        fetch(`/api/reports/download?dateRange=${dateRange}`)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'attendance_report.xlsx';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error downloading report:', error);
            });
    });

    // Initial load
    loadStudents();
});