import figma from '@figma/code-connect';

import {PersonSpeaker} from '../lib';

figma.connect(
    PersonSpeaker,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A727',
    {
        example: () => <PersonSpeaker />,
    },
);
