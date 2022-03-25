import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Appointment, AppointmentsDayView } from '../src/AppointmentsDayView';

describe('Appointment', () => {
    let container;

    const today = new Date();

    const appointment = {
        customer: {
            firstName: 'Ashley',
            lastName: 'Hope',
            phoneNumber: '1234567',
            stylist: 'Hannie Boeljans',
            service: 'Shave the customer',
        },
        startsAt: today.setHours(12, 0),
    };

    const render = (component) => ReactDOM.render(component, container);

    container = document.createElement('div');
    render(<Appointment appointment={appointment} />);

    it('renders the customer first name', () => {
        expect(container.textContent).toMatch('Ashley');
    });

    it('renders a last name', () => {
        expect(container.textContent).toMatch('Hope');
    });

    it('renders a phone number', () => {
        expect(container.textContent).toMatch(appointment.customer.phoneNumber);
    });

    it('renders a stylist name', () => {
        expect(container.textContent).toMatch(appointment.customer.stylist);
    });

    it('renders a salon service', () => {
        expect(container.textContent).toMatch(appointment.customer.service);
    });

    it('renders a time header', () => {
        expect(container.textContent).toMatch(appointment.startsAt);
    });
});

describe('AppointmentsDayView', () => {
    let container;

    const today = new Date();

    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: { firstName: 'Ashley' },
        },
        {
            startsAt: today.setHours(13, 0),
            customer: { firstName: 'Jordan' },
        },
    ];

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = (component) => ReactDOM.render(component, container);

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointsments in an ol element', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelector('ol')).not.toBeNull();

        expect(container.querySelector('ol').children).toHaveLength(2);
    });

    it('renders each appointment in an li', () => {
        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelectorAll('li')).toHaveLength(2);

        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');

        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
    });

    it('initially shows a message saying there are no appointments today', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.textContent).toMatch('There are no appointments scheduled for today.');
    });

    it('selects the first appointment by default', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.textContent).toMatch('Ashley');
    });

    it('has a button element in each li', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelectorAll('li > button')).toHaveLength(2);
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
    });

    it('renders another appointment when selected', () => {
        render(<AppointmentsDayView appointments={appointments} />);
        const button = container.querySelectorAll('button')[1];
        ReactTestUtils.Simulate.click(button);
        expect(container.textContent).toMatch('Jordan');
    });
});
