import React from 'react';


const ErrorEmail = () => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    
    if (value.length < 5) {
      setErrorMessage("لطفاً ایمیل خود را به صورت کامل بنویسید");
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <Input type="text" onChange={handleChange} />
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </div>
  );
};

export  {ErrorEmail};