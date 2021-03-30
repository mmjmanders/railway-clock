import "./Hand.css";

type HandSecondProps = {
    seconds: number;
}

const HandSeconds = ({seconds}: HandSecondProps) => {
    const degrees = seconds * 6;
    return (<use xlinkHref="#hand_seconds" transform={`rotate(${degrees})`} className="hand seconds"/>);
}

export default HandSeconds;
