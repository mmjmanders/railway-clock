import "./Hand.css";

type HandHoursProps = {
    hours: number;
    minutes: number;
}

const HandHours = ({hours, minutes}: HandHoursProps) => {
    const degrees = (hours % 12 * 30) + (minutes * .5);
    return (<use xlinkHref="#hand_hours" transform={`rotate(${degrees})`} className="hand"/>);
}

export default HandHours;
