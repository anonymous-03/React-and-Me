import Loginform from './Loginform';
import Greeting from './Greetingform';
import { useContext } from 'react';
import  UserContext  from '../context/UserContext';
import Panel from './Panel';



export default function Form() {
    const { user } = useContext(UserContext);
    return (
        <Panel title="Welcome to the Context API Example">
            {user ? <Greeting/> : <Loginform />}
        </Panel>
    )
}