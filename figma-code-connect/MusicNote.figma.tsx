import figma from '@figma/code-connect';

import {MusicNote} from '../lib';

figma.connect(
    MusicNote,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1368',
    {
        example: () => <MusicNote />,
    },
);
