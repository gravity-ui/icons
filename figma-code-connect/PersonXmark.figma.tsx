import figma from '@figma/code-connect';

import {PersonXmark} from '../lib';

figma.connect(
    PersonXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122424',
    {
        example: () => <PersonXmark />,
    },
);
