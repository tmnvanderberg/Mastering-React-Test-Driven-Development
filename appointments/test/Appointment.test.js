import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

let container;
let customer;
beforeEach(() => {
    container = document.createElement('div');
});
const render = (component) =>
    ReactDOM.render(component, container);
describe('Appointment', () => {
    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch('Ashley');
    });
    it('renders the another first name', () => {
        customer = { firstName: 'Jordan' };
        render(<Appointment customer={customer} />);
        expect(container.textContent).toMatch('Jordan');
    });
});
