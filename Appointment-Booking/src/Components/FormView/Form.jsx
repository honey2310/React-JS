import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    date: '',
    time: '',
    service: '',
    doctor: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...appointments];
      updated[editIndex] = formData;
      setAppointments(updated);
      setEditIndex(null);
    } else {
      setAppointments([...appointments, formData]);
    }
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      birthDate: '',
      date: '',
      time: '',
      service: '',
      doctor: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(appointments[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div className="booking-wrapper">
      {/* Left Section - Form */}
      <div className="form-section card">
        <h1>📅 Book Your Appointment</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male ♂</option>
            <option value="Female">Female ♀</option>
            <option value="Other">Other ⚧</option>
          </select>

          <label>Birth Date</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />

          <label>Appointment Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Appointment Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Select Service</label>
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Select Service --</option>
            <option value="Consultation">Consultation</option>
            <option value="Therapy">Therapy</option>
            <option value="Check-up">Check-up</option>
          </select>

          <label>Select Doctor</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">-- Select Doctor --</option>
            <option value="Dr. Tanmay">Dr. Tanmay</option>
            <option value="Dr. Jenil">Dr. Jenil</option>
            <option value="Dr. Kavya">Dr. Kavya</option>
          </select>

          <button type="submit" className="primary-btn">
            {editIndex !== null ? 'Update Appointment' : 'Book Now'}
          </button>
        </form>
      </div>

      {/* Right Section - Appointments */}
      <div className="appointments-section card">
        <h2>🗒 Appointments Booked</h2>
        {appointments.length === 0 ? (
          <p className="no-appointments">No appointments booked yet. Start by filling the form.</p>
        ) : (
          <ul>
            {appointments.map((appt, index) => (
              <li key={index} className="appointment-item">
                <div>
                  <strong>{appt.name}</strong> ({appt.gender})
                  <p>Birth Date: {appt.birthDate}</p>
                  <p>{appt.service} with <b>{appt.doctor}</b></p>
                  <p className="time">{appt.date} at {appt.time}</p>
                </div>
                <div className="btn-group">
                  <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
