import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';

describe('CustomerForm', () => {
  let render, container;

  const form = (id) => container.querySelector(`form[id=${id}]`);

  const firstNameField = () => form('customer').elements.firstName;

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

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
    render(<CustomerForm firstName="Ashley" />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('includes the existing value for the first name', () => {
    render(<CustomerForm firstName="Ashley" />);
    expect(firstNameField().value).toEqual('Ashley');
  });

  it('renders a label for the firt name field', () => {
    render(<CustomerForm />);
    expect(labelFor('firstName')).not.toBeNull();
    expect(labelFor('firstName').textContent).toEqual(
      'First name'
    );
  });

  it('assigns an id that matches the label id to the first name field', () => {
    render(<CustomerForm />);
    expect(firstNameField().id).toEqual('firstName');
  });

  it('saves existing first name when submitted', async () => {
    expect.hasAssertions();
    render(
      <CustomerForm
        firstName="Ashley"
        onSubmit={({ firstName }) =>
          expect(firstName).toEqual('Ashley')
        }
      />
    );
    ReactTestUtils.Simulate.change(firstNameField(), {
      target: { value: 'Jamie' },
    });
    ReactTestUtils.Simulate.submit(form('customer'));
  });
});
