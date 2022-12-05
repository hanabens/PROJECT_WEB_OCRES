import React, { useEffect, useState } from 'react';
import './horloge.css';

function Horloge() {

    const [horlogeState, setHorlogeState] = useState();

    useEffect(() => {
        // 1000 est l'interval
        setInterval(() => {
            const date = new Date();
            setHorlogeState(date.toLocaleTimeString());
        }, 1000);

    }, []);

    return <div className='widget_Horloge'>
        <div className='titre_Horloge'> Heure UTC+1 </div>
        <div className='Horloge'>
            {horlogeState}
        </div>
    </div>

}

export default Horloge;


{/*
export default class Horloge extends React.Component {
    render() {
        return (
            <div className="horloge">
                <div className="heure">
                    <div className="hr"></div>
                </div>
                <div className="minute">
                    <div className="min"></div>
                </div>
                <div className="seconde">
                    <div className="sec"></div>
                </div>

                <div className="numerique">
                    <div className="h-ana">12</div>
                    <div className="m-ana">36</div>
                    <div className="s-ana">02</div>
                </div>

            </div>);
    }
} */} /*lazoneeeee*/
