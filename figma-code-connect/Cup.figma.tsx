import figma from '@figma/code-connect';

import Cup from '../lib/Cup';

figma.connect(
    Cup,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1233',
    {
        example: () => <Cup />,
    },
);
