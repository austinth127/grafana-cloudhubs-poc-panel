import React, { useRef } from 'react';
import ForceGraph3D, { ForceGraphMethods } from 'react-force-graph-3d';
import { ForceGraphProps as SharedProps } from 'react-force-graph-2d';

import myData from '../../data/trainticket.json';

type Props = {
    width: number;
    height: number;
    sharedProps: SharedProps;
};

const Graph: React.FC<Props> = ({ width, height, sharedProps }) => {
    const graphRef = useRef<ForceGraphMethods>();
    return (
        <ForceGraph3D
            ref={graphRef}
            graphData={myData}
            width={width}
            height={height}
            linkDirectionalArrowColor={() => 'rgba(255,255,255,1)'}
            linkColor={() => 'rgba(255,255,255,1)'}
        />
    );
};

export default Graph;
