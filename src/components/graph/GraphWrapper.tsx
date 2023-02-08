import React from 'react';
import { ForceGraphProps as SharedProps } from 'react-force-graph-2d';
import { SimpleOptions } from 'types';

import Graph2D from './Graph2D';
import Graph3D from './Graph3D';

import myData from '../../data/trainticket.json';

type Props = {
    options: SimpleOptions;
    width: number;
    height: number;
};

const VisualizationOptions: React.FC<Props> = (props) => {
    const Shared2D3DProps: SharedProps = {
        linkDirectionalArrowColor: () => 'rgba(255,255,255,0.3)',
        linkColor: () => 'rgba(255,255,255,0.3)',
        linkDirectionalArrowLength: 4,
        linkDirectionalArrowRelPos: 1,
        nodeAutoColorBy: 'id',
        graphData: myData,
    };

    const GraphProps = {
        sharedProps: Shared2D3DProps,
        ...props,
    };

    return <div>{props.options.is2d3d === '2d' ? <Graph2D {...GraphProps} /> : <Graph3D {...GraphProps} />}</div>;
};

export default VisualizationOptions;
