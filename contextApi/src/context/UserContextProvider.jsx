import React from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children,value }) {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}