/**
 * Minimal form validation helpers
 */

export const validators = {
  required: (value: any) => {
    const isValid = !!value?.toString().trim();
    return isValid ? true : 'This field is required';
  },
  
  email: (value: string) => {
    if (!value) return 'Email is required';
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return isValid ? true : 'Invalid email address';
  },
  
  phone: (value: string) => {
    if (!value) return true; // Phone is optional
    const isValid = /^[\+]?[\d\s\-\(\)]+$/.test(value);
    return isValid ? true : 'Invalid phone number';
  },
  
  url: (value: string) => {
    if (!value) return true; // URL is optional
    const isValid = /^https?:\/\//.test(value);
    return isValid ? true : 'URL must start with http:// or https://';
  },
  
  min: (min: number) => (value: string | number) => {
    const isValid = Number(value) >= min;
    return isValid ? true : `Must be at least ${min}`;
  },
  
  max: (max: number) => (value: string | number) => {
    const isValid = Number(value) <= max;
    return isValid ? true : `Must be no more than ${max}`;
  },
  
  minLength: (min: number) => (value: string) => {
    const isValid = value.length >= min;
    return isValid ? true : `Must be at least ${min} characters`;
  },
  
  maxLength: (max: number) => (value: string) => {
    const isValid = value.length <= max;
    return isValid ? true : `Must be no more than ${max} characters`;
  }
};

export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: Partial<Record<keyof T, ((value: any) => string | true)[]>>
): Record<string, string> {
  const errors: Record<string, string> = {};
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    if (!fieldRules) continue;
    
    for (const rule of fieldRules) {
      const result = rule(data[field]);
      if (result !== true) {
        errors[field] = result;
        break; // First error wins
      }
    }
  }
  
  return errors;
}