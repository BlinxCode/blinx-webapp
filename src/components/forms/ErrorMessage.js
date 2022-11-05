import React from 'react';

const ErrorMessage = ({ error, visible }) => {
  if(!error || !visible) return null;
  return (
    <p className='text-danger'> { error } </p>
  )
}

export default ErrorMessage;