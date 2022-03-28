import React, { useState } from 'react';

export const Appointment = ({ appointment }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>{appointment.startsAt}</th>
                    </tr>
                    <tr>
                        <th>Customer</th>
                        <td>{appointment.customer.firstName} {appointment.customer.lastName}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{appointment.customer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Stylist</th>
                        <td>{appointment.stylist}</td>
                    </tr>
                    <tr>
                        <th>Service</th>
                        <td>{appointment.service}</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>{appointment.notes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const appointmentsTimeOfDay = (startsAt) => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(0);
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map((appointment, i) => (
                    <li key={appointment.startsAt}>
                        <button type="button" onClick={() => setSelectedAppointment(i)}>
                            {appointmentsTimeOfDay(appointment.startsAt)}
                        </button>
                    </li>
                ))}
            </ol>
            {appointments.length === 0 ? (
                <p>There are no appointments scheduled for today.</p>
            ) : (
                <Appointment appointment={appointments[selectedAppointment]} />
            )}
        </div>
    );
};
