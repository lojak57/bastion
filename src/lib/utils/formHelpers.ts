/**
 * Minimal form validation helpers
 */

export const validators = {
  required: (value: any) => !!value?.toString().trim() || 'This field is required',
  
  email: (value: string) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email address',
  
  phone: (value: string) => 
    !value || /^[\+]?[\d\s\-\(\)]+$/.test(value) || 'Invalid phone number',
  
  url: (value: string) =>
    !value || /^https?:\/\//.test(value) || 'URL must start with http:// or https://',
  
  min: (min: number) => (value: string | number) =>
    Number(value) >= min || `Must be at least ${min}`,
  
  max: (max: number) => (value: string | number) =>
    Number(value) <= max || `Must be no more than ${max}`,
  
  minLength: (min: number) => (value: string) =>
    value.length >= min || `Must be at least ${min} characters`,
  
  maxLength: (max: number) => (value: string) =>
    value.length <= max || `Must be no more than ${max} characters`
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