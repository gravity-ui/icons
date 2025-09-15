import figma from '@figma/code-connect';

import {CircleLetterC} from '../lib';

figma.connect(
    CircleLetterC,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78249',
    {
        example: () => <CircleLetterC />,
    },
);
