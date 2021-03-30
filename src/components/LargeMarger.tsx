import './Marker.css';

type LargeMarkerProps = {
    degrees: number;
}

const LargeMarker = ({degrees}: LargeMarkerProps) => (
    <use xlinkHref="#marker_large" transform={`rotate(${degrees})`} className="marker"/>
)

export default LargeMarker;
