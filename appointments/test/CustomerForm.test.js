import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  const form = (id) => container.querySelector(`form[id=${id}]`);

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it('renders a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text');
  };

  it('renders the first name fiels as a text box', () => {
    render(<CustomerForm firstName="Ashley"/>);
    const field = form('customer').elements.firstName;
    expectToBeInputFieldOfTypeText(field);
  });
});
