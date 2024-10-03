"use client";
import { useState } from 'react';

export default function Form() {
  const [pinCode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ pinCode: '', phone: '' });

  const validatePinCode = (value) => {
    const pinRegex = /^\d{6}$/; // PIN code should be exactly 6 digits
    if (!pinRegex.test(value)) {
      return 'Pin code must be a 6-digit number.';
    }
    return '';
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Phone number should start with 6-9 and be 10 digits
    if (!phoneRegex.test(value)) {
      return 'Phone number must be 10 digits and start with 6, 7, 8, or 9.';
    }
    return '';
  };

  const handlePinChange = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPinCode(value);

      // Only validate when the length is exactly 6 digits
      if (value.length === 6) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          pinCode: validatePinCode(value),
        }));
      } else {
        // Clear the error if the input is less than 6 digits while typing
        setErrors((prevErrors) => ({ ...prevErrors, pinCode: '' }));
      }
    }
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      setPhone(value);

      // Only validate when the length is exactly 10 digits
      if (value.length === 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: validatePhone(value),
        }));
      } else {
        // Clear the error if the input is less than 10 digits while typing
        setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pinError = validatePinCode(pinCode);
    const phoneError = validatePhone(phone);
    setErrors({ pinCode: pinError, phone: phoneError });

    if (!pinError && !phoneError) {
      alert('Form submitted successfully!');
      // Submit form or do further processing here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="pinCode" className="block text-gray-700 font-semibold mb-2">
            Enter 6-digit PIN Code
          </label>
          <input
            type="text"
            id="pinCode"
            value={pinCode}
            onChange={handlePinChange}
            maxLength="6"
            className={`w-full px-4 py-2 border ${
              errors.pinCode ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.pinCode ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            placeholder="Enter your PIN code"
          />
          {errors.pinCode && <p className="text-red-500 text-sm mt-2">{errors.pinCode}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Enter Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="10"
            className={`w-full px-4 py-2 border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
