import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page);
  };

  return (
    <NavigationContext.Provider value={{ goToPage }}>
      {children}  {/* ✅ Ensures child components are rendered */}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
