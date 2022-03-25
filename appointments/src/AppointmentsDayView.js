import React, { useState } from 'react';

export const Appointment = ({ customer }) => (
    <div>
        Customer: {customer.firstName} {customer.lastName}
    </div>
);

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
