import figma from '@figma/code-connect';

import {PersonsLock} from '../lib';

figma.connect(
    PersonsLock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A401',
    {
        example: () => <PersonsLock />,
    },
);
