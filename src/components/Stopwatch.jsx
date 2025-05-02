import { useEffect, useRef, useState } from 'react';
function StopWatch() {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);
    const currentTimeRef = useRef(0);

    useEffect(() => {
        console.log('after clean up');
        if(running) {
            console.log('after clean up inside function');
            intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - currentTimeRef.current);
        }, 10)
    }

        return () => { console.log('clean up'); clearInterval(intervalRef.current) };
    }, [running]);

    const onStart = () => {
        setRunning(true);
        currentTimeRef.current = Date.now() - elapsedTime;
    }

    const onPause = () => {
        setRunning(false);
    }

    const onReset = () => {
        setElapsedTime(0);
        setRunning(false);
    }

    const formatTime = () => {
        // let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
        let min = Math.floor((elapsedTime/(1000 * 60)) % 60).toString().padStart(2, "0");
        let sec = Math.floor(elapsedTime/(1000) % 60).toString().padStart(2, "0");
        let milli = Math.floor((elapsedTime % 1000)/10).toString().padStart(2, "0");

        return `${min} : ${sec} : ${milli}`;

    }

    return (
    <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid black', margin: '0 auto', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ background: 'black', color: 'white', width: '100%', textAlign: 'center', padding: '20px', fontSize: '18px' }}>{formatTime()}</div>
        <div style = {{ display: 'flex', width: '100%', overflow: 'hidden', textAlign: 'center' }}>
            <div style = {{ flex: 1, borderRight: '2px solid black', cursor: 'pointer', padding: '16px 0px' }} onClick={onStart}>Start</div>
            <div style = {{ flex: 1, borderRight: '2px solid black', cursor: 'pointer', padding: '16px 0px' }} onClick={onPause}>Pause</div>
            <div style = {{ flex: 1, cursor: 'pointer', padding: '16px 0px', background: 'blue', color: 'white' }} onClick={onReset}>Reset</div>
        </div>
    </div>
    
)}

export default StopWatch;