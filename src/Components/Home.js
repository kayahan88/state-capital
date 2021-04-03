import React, {useEffect, useState} from 'react';
import CapitalDisplay from './CapitalDisplay';
import stateCapitals from '../data';


const Home = () => {

    const [state, setState] = useState([]);
    const [userState, setUserState] = useState('');

    const capitals = stateCapitals;


    useEffect(() => {
        return(
            console.log('useEffect in Home.js fired!')
        )
    }, [userState, state]);

    function getCapital(){
        console.log('clicked!');
        // console.log(userState);

        for(let i = 0; i < capitals.length; i++){

            if(capitals[i].state === userState){

                const foundState = capitals[i].state;
                const foundCapital = capitals[i].capital;

                setState([foundState, foundCapital]);
                setUserState('');

                return foundCapital
            } else {
                console.log('nope')
            }
        }
    };

    return (
        <div>


            <header>
                <h1>What's the Capital?</h1>
            </header>

            <div className='main'>
                <section className='left-container'>
                    <h1>Type in a state here:</h1>
                    <input 
                        className='input'
                        placeholder="type a state"
                        onChange={e => setUserState(e.target.value)}
                        value={userState}
                        />
                    <button 
                        className='button'
                        onClick={() => getCapital()}>  Tell me the Capital!  </button>
                </section>

                <section className='right-container'>
                    {/* <h3>{state}</h3> */}
                    <h1>The capital is:</h1>
                    <CapitalDisplay state={[state]}/>
                </section>
            </div>

        </div>
    )
};
export default Home;