import figma from '@figma/code-connect';

import ToggleOn from '../lib/ToggleOn';

figma.connect(
    ToggleOn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A2',
    {
        example: () => <ToggleOn />,
    },
);
