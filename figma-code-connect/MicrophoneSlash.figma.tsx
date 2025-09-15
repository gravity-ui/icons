import figma from '@figma/code-connect';

import {MicrophoneSlash} from '../lib';

figma.connect(
    MicrophoneSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76608',
    {
        example: () => <MicrophoneSlash />,
    },
);
