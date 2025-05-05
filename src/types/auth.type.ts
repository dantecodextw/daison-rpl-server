export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export type LoginData = Pick<SignupData, 'email' | 'password'>;
