import "./Hand.css";

type HandMinutesProps = {
    minutes: number;
}

const HandMinutes = ({minutes}: HandMinutesProps) => {
    const degrees = minutes * 6;
    return (<use xlinkHref="#hand_minutes" transform={`rotate(${degrees})`} className="hand"/>);
}

export default HandMinutes;
