const API_URL = 'http://localhost:3001';

export const fetchStudents = async () => {
  const response = await fetch(`${API_URL}/students`);
  return response.json();
};

export const addStudent = async (name: string, groupName: string) => {
  await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, group_name: groupName }),
  });
};