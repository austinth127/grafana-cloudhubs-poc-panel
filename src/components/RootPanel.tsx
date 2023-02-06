import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { ForceGraph2D } from 'react-force-graph';
import myData from '../data/trainticket.json';

interface Props extends PanelProps<SimpleOptions> {}

const RootPanel: React.FC<Props> = ({ options, data, width, height }) => {
  return (
    <ForceGraph2D
      graphData={myData}
      nodeAutoColorBy="id"
      width={width}
      height={height}
      linkDirectionalArrowColor={() => 'rgba(255,255,255,0.3)'}
      linkColor={() => 'rgba(255,255,255,0.3)'}
      linkDirectionalArrowLength={4}
      linkDirectionalArrowRelPos={1}
    />
  );
};

export default RootPanel;
