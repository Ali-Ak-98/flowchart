const ZoomControl = ({ onZoomIn, onZoomOut }) => (
    <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <button onClick={onZoomIn}>Zoom In</button>
        <button onClick={onZoomOut}>Zoom Out</button>
    </div>
);

export default ZoomControl;
