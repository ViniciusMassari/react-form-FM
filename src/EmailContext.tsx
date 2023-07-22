import { createContext, useState } from 'react';
interface EmailContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const defaultEmailContext: EmailContextType = {
  email: '',
  setEmail: () => {},
};

export const EmailContext =
  createContext<EmailContextType>(defaultEmailContext);

export function EmailContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [email, setEmail] = useState<string>('');

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}
