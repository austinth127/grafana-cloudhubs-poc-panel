import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import RootPanel from './components/RootPanel';

export const plugin = new PanelPlugin<SimpleOptions>(RootPanel);
