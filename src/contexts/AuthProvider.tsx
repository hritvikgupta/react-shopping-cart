import React from "react";

const AuthProvider = () => {
  return <div>AuthProvider</div>;
};

export default AuthProvider;
// // AuthContext.tsx
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import jwtDecode from "jwt-decode";

// interface IAuthContext {
//   user: string | null;
//   setUser: React.Dispatch<React.SetStateAction<string | null>>;
// }

// type IProps = {
//   children?: React.ReactNode;
// };

// export const AuthContext = createContext<IAuthContext>({
//   user: null,
//   setUser: () => null,
// });

// const AuthProvider: React.FC<IProps> = ({ children }) => {
//   const [user, setUser] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded: any = jwtDecode(token);
//       setUser(decoded?.user);
//     }
//     console.log(
//       user ? `User is logged in as ${user}` : "User is not logged in"
//     );
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
