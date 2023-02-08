import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import GraphWrapper from './graph/GraphWrapper';

interface Props extends PanelProps<SimpleOptions> {}

const RootPanel: React.FC<Props> = (props) => {
    return <GraphWrapper {...props} />;
};

export default RootPanel;
