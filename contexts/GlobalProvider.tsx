import { getCurUser } from "@/lib/appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";

// Define the type for your context
type UserType = {
  $id: string;
  avatar?: string;
  name?: string;
  // Add more fields as needed
};

interface GlobalContextType {
  user: UserType;
  setUser: (user: UserType) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

type globalProvider = {
  children: React.ReactNode;
};

// Create context with a default value of `null` and type it
const GlobalContext = createContext<GlobalContextType | null>(null);

function GlobalProvider({ children }: globalProvider) {
  const [user, setUser] = useState<UserType>({
    // Default user data with placeholders
    $id: "",
    avatar: "", // Provide a default or placeholder avatar
    name: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      try {
        const res: Models.Document = await getCurUser(); // Get user data

        // Map the response to fit the expected UserType structure
        const mappedUser: UserType = {
          $id: res.$id, // Make sure $id exists in the response
          avatar: res.avatar, // Use a default or empty string if avatar is missing
          name: res.username || "", // Use a default or empty string if username is missing
        };

        setUser(mappedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, isAuthenticated, isLoading, setIsAuthenticated }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
}
export default GlobalProvider;
