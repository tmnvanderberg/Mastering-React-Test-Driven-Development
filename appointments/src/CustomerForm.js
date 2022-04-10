import React from 'react';

export const CustomerForm = ({ firstName, onSubmit }) => {
  const customer = { firstName };
  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First name</label>
      <input
        readOnly
        id="firstName"
        type="text"
        name="firstName"
        value={firstName}
      />
    </form>
  );
};
