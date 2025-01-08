'use client'

import { useState } from 'react';
import Flowchart from '@/components/Flowchart';
import ZoomControl from '@/components/ZoomControl';
import StoryMode from '@/components/StoryMode';
import data from '@/data/data.json';

export default function Home() {
    const [zoomLevel, setZoomLevel] = useState('overview'); // 'overview', 'mid', 'detail'
    const [storyMode, setStoryMode] = useState(false);

    const handleZoomIn = () => setZoomLevel('mid');
    const handleZoomOut = () => setZoomLevel('overview');

    return (
        <div>
            <h1>Political Process Flowchart</h1>
            <ZoomControl onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
            <div style={{ marginTop: 20 }}>
                <Flowchart data={data} zoomLevel={zoomLevel} />
            </div>
            <button onClick={() => setStoryMode(!storyMode)}>
                {storyMode ? 'Exit Story Mode' : 'Enter Story Mode'}
            </button>
            {storyMode && <StoryMode nodes={data.nodes} />}
        </div>
    );
}
