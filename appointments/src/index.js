import React from 'react';
import ReactDOM from 'react-dom';
import { AppointmentsDayView } from './appointment';
import { SampleAppointments } from './sampleData';

ReactDOM.render(
    <AppointmentsDayView appointments={SampleAppointments} />,
    document.getElementById('root')
);
