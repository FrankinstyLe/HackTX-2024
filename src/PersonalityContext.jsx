import { createContext } from "react";

const PersonalityContext = createContext();

export function usePersonality() {
  return useContext(PersonalityContext);
}

export const personalityProvider = ({ children }) => {
  const [personality, setPersonality] = useState(1);
};
