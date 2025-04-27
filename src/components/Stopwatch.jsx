import { useEffect, useRef, useState } from 'react';
function StopWatch() {

    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    const timeRef = useRef(null);

    useEffect(() => {
        if(running) {
            timeRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)
    }

        return () => { clearInterval(timeRef.current) };
    }, [running]);

    const onStart = () => {
        setRunning(true);
    }

    const onPause = () => {
        setRunning(false);
    }

    const onReset = () => {
        setSeconds(0);
        setRunning(false);
    }

    return (
    <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid black', margin: '0 auto', width: '300px', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ background: 'black', color: 'white', width: '100%', textAlign: 'center', padding: '20px', fontSize: '18px' }}>{seconds}</div>
        <div style = {{ display: 'flex', width: '100%', overflow: 'hidden', textAlign: 'center' }}>
            <div style = {{ flex: 1, borderRight: '2px solid black', cursor: 'pointer', padding: '16px 0px' }} onClick={onStart}>Start</div>
            <div style = {{ flex: 1, borderRight: '2px solid black', cursor: 'pointer', padding: '16px 0px' }} onClick={onPause}>Pause</div>
            <div style = {{ flex: 1, cursor: 'pointer', padding: '16px 0px', background: 'blue', color: 'white' }} onClick={onReset}>Reset</div>
        </div>
    </div>
    
)}

export default StopWatch;