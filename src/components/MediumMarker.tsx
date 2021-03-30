import './Marker.css';

type MediumMarkerProps = {
    degrees: number;
}

const MediumMarker = ({degrees}: MediumMarkerProps) => (
    <use xlinkHref="#marker_medium" transform={`rotate(${degrees})`} className="marker"/>
)

export default MediumMarker;
