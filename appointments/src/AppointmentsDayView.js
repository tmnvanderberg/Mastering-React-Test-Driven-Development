import React, { useState } from 'react';

export const Appointment = ({ appointment }) => {
    let customer = appointment.customer;
    let startsAt = appointment.startsAt;
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>{startsAt}</th>
                    </tr>
                    <tr>
                        <th>Customer</th>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td>{customer.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th>Stylist</th>
                        <td>{customer.stylist}</td>
                    </tr>
                    <tr>
                        <th>Service</th>
                        <td>{customer.service}</td>
                    </tr>
                    <tr>
                        <th>Notes</th>
                        <td>{customer.notes}</td>
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
                <Appointment {...appointments[selectedAppointment]} />
            )}
        </div>
    );
};
