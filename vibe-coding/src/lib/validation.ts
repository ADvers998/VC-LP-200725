export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export function validateEmail(email: string): ValidationError | null {
  if (!email) {
    return { field: 'email', message: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { field: 'email', message: 'Please enter a valid email address' };
  }

  return null;
}

export function validateName(name: string): ValidationError | null {
  if (!name) {
    return { field: 'name', message: 'Name is required' };
  }

  if (name.trim().length < 2) {
    return {
      field: 'name',
      message: 'Name must be at least 2 characters long',
    };
  }

  if (name.trim().length > 100) {
    return { field: 'name', message: 'Name must be less than 100 characters' };
  }

  return null;
}

export function validateInterestSubmission(data: {
  name: string;
  email: string;
  subscribed?: boolean;
}): ValidationResult {
  const errors: ValidationError[] = [];

  const nameError = validateName(data.name);
  if (nameError) errors.push(nameError);

  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function getFieldError(
  errors: ValidationError[],
  field: string
): string | null {
  const error = errors.find(err => err.field === field);
  return error ? error.message : null;
}
