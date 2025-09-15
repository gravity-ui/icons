import figma from '@figma/code-connect';

import {CircleLetterT} from '../lib';

figma.connect(
    CircleLetterT,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78208',
    {
        example: () => <CircleLetterT />,
    },
);
