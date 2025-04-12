import React, { useState } from 'react';

const AddStudentForm: React.FC<{ onAddStudent: (student: { name: string; group: string; paymentStatus: string }) => void }> = ({ onAddStudent }) => {
    const [name, setName] = useState('');
    const [group, setGroup] = useState('C');
    const [paymentStatus, setPaymentStatus] = useState('Paid');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddStudent({ name, group, paymentStatus });
        setName('');
        setGroup('C');
        setPaymentStatus('Paid');
    };

    return (
        <form onSubmit={handleSubmit} className="add-student-form">
            <h2>Add New Student</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="group">Group:</label>
                <select
                    id="group"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    <option value="C">C</option>
                    <option value="B">B</option>
                    <option value="A y WS">A y WS</option>
                </select>
            </div>
            <div>
                <label htmlFor="paymentStatus">Payment Status:</label>
                <select
                    id="paymentStatus"
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                </select>
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;