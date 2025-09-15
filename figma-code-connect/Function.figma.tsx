import figma from '@figma/code-connect';

import Function from '../lib/Function';

figma.connect(
    Function,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A933',
    {
        example: () => <Function />,
    },
);
