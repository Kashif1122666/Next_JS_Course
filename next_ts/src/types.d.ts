declare global {
  interface user{
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user' | 'guest';
  }
}

export {};