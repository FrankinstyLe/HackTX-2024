import {useContext} from 'react'


const PersonalityContext = React.createContext()

export function usePersonality(){
    return useContext(PersonalityContext)
}

export const personalityProvider = ({children}) => {
    const [personality,setPersonality] = useState(1)
}