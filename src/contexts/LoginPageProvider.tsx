import React, { createContext, useState, useContext, ReactNode } from "react";

interface LoginPageContextType {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

export const LoginPageContext = createContext<LoginPageContextType | undefined>(
  undefined
);

interface LoginPageProviderProps {
  children: ReactNode;
}

export const LoginPageProvider = ({ children }: LoginPageProviderProps) => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <LoginPageContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </LoginPageContext.Provider>
  );
};

export const useLoginPageContext = (): LoginPageContextType => {
  const context = useContext(LoginPageContext);
  if (!context) {
    throw new Error(
      "useLoginPageContext must be used within a LoginPageProvider"
    );
  }
  return context;
};
