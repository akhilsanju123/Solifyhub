import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const EnquiryContext = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return <EnquiryContext.Provider value={{ open, close, isOpen }}>{children}</EnquiryContext.Provider>;
}

export const useEnquiry = () => useContext(EnquiryContext);
