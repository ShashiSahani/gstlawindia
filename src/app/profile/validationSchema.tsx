export const validatePinCode = (value:any) => {
    const pinRegex = /^\d{6}$/; // PIN code should be exactly 6 digits
    if (!pinRegex.test(value:any)) {
      return 'Pin code must be a 6-digit number.';
    }
    return '';
  };
  
  export const validatePhone = (value:any) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Phone number should start with 6-9 and be 10 digits
    if (!phoneRegex.test(value:any)) {
      return 'Phone number must be 10 digits and start with 6, 7, 8, or 9.';
    }
    return '';
  };
  