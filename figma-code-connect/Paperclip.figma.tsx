import figma from '@figma/code-connect';

import Paperclip from '../lib/Paperclip';

figma.connect(
    Paperclip,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76858',
    {
        example: () => <Paperclip />,
    },
);
