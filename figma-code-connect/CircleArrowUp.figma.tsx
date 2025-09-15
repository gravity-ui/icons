import figma from '@figma/code-connect';

import {CircleArrowUp} from '../lib';

figma.connect(
    CircleArrowUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5151%3A113',
    {
        example: () => <CircleArrowUp />,
    },
);
