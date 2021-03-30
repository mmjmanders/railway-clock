import './Marker.css';

type SmallMarkerProps = {
    degrees: number;
}

const SmallMarker = ({degrees}: SmallMarkerProps) => (
    <use xlinkHref="#marker_small" transform={`rotate(${degrees})`} className="marker"/>
)

export default SmallMarker;
