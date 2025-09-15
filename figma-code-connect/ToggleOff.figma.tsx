import figma from '@figma/code-connect';

import ToggleOff from '../lib/ToggleOff';

figma.connect(
    ToggleOff,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A10',
    {
        example: () => <ToggleOff />,
    },
);
