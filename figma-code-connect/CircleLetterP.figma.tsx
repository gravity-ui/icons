import figma from '@figma/code-connect';

import {CircleLetterP} from '../lib';

figma.connect(
    CircleLetterP,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78255',
    {
        example: () => <CircleLetterP />,
    },
);
