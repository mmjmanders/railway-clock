import {useEffect, useState} from 'react';
import Face from './Face';
import LargeMarger from './LargeMarger';
import MediumMarker from './MediumMarker';
import SmallMarker from './SmallMarker';
import HandHours from './HandHours';
import HandMinutes from './HandMinutes';
import HandSeconds from './HandSeconds';
import "./Clock.css";

const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg viewBox="-1024 -1024 2048 2048" className="clock">
            <defs>
                <path id="marker_small" d="M -20,-1000 l 40,0 0,100 -40,0 z"/>
                <path id="marker_medium" d="M -40,-1000 l 80,0 0,240 -80,0 z"/>
                <path id="marker_large" d="M -40,-1000 l 80,0 0,300 -80,0 z"/>
                <path id="hand_hours" d="M -50,-600  l 50,-50 50,50 0,800  -100,0 z"/>
                <path id="hand_minutes" d="M -40,-900  l 40,-40 40,40 0,1180 -80,0  z"/>
                <g id="hand_seconds">
                    <path
                        d="M -10,-910 l 10,-10 10,10 2,300 -24,0 z M -13,-390 l 26,0 7,690 -40,0 z"/>
                    <path
                        d="M 0,-620 a 120,120 0 0 1 0,240 a 120,120 0 0 1 0,-240 z M 0,-560 a 60,60 0 0 0 0,120 a 60,60 0 0 0 0,-120 z"/>
                </g>
            </defs>
            <Face/>
            <g>
                {
                    Array(60).fill(0)
                        .map((val, idx) => idx)
                        .filter(val => val % 15 === 0)
                        .map(val => (<LargeMarger key={val} degrees={val * 90 / 15}/>))
                }
            </g>
            <g>
                {
                    Array(60).fill(0)
                        .map((val, idx) => idx)
                        .filter(val => val % 15 === 5 || val % 15 === 10)
                        .map(val => (<MediumMarker key={val} degrees={val * 6}/>))
                }
            </g>
            <g>
                {
                    Array(60).fill(0)
                        .map((val, idx) => idx)
                        .filter(val => val % 5 !== 0)
                        .map(val => (<SmallMarker key={val} degrees={val * 6}/>))
                }
            </g>
            <HandHours hours={time.getHours()} minutes={time.getMinutes()}/>
            <HandMinutes minutes={time.getMinutes()}/>
            <HandSeconds seconds={time.getSeconds()}/>
        </svg>
    )
}

export default Clock;
