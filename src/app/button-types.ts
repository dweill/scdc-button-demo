export const buttonType = [
  'Save',
  'Publish',
  'Login',
  'Cancel',
  'Increment',
  'Decrement',
  'Begin',
  'End',
  'Sign Up',
  'Submit',
  'Upload',
  'Play',
  'Pause',
] as const;
export type ButtonType = (typeof buttonType)[number];
