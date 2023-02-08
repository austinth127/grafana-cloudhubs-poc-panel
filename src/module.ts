import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import RootPanel from './components/RootPanel';

export const plugin = new PanelPlugin<SimpleOptions>(RootPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addRadio({
      path: 'is2d3d',
      name: 'Choose between 2D and 3D visualization',
      defaultValue: '2D',
      settings: {
        options: [
          {
            value: '2d',
            label: '2D',
          },
          {
            value: '3d',
            label: '3D',
          },
        ],
      },
    });
});
