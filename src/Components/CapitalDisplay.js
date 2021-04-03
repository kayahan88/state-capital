import React, {useEffect} from 'react';

function CapitalDisplay(props) {

const {state} = props;

    useEffect(() => {
        return(
            console.log('useEffect in CapitalDisplay.js fired!')
        )
    }, [state])


return (
    <div>


        <section className='capital'>
            {state[0][1]}
        </section>

    </div>
)
}
export default CapitalDisplay;