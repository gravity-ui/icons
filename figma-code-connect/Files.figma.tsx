import figma from '@figma/code-connect';

import Files from '../lib/Files';

figma.connect(
    Files,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76749',
    {
        example: () => <Files />,
    },
);
