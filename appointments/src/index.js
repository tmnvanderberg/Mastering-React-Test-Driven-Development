import React from 'react';
import ReactDOM from 'react-dom';
import { AppointmentsDayView } from './AppointmentsDayView';
import { SampleAppointments } from './sampleData';

ReactDOM.render(
    <AppointmentsDayView appointments={SampleAppointments} />,
    document.getElementById('root')
);
