import figma from '@figma/code-connect';

import CircleNumber3 from '../lib/CircleNumber3';

figma.connect(
    CircleNumber3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A214',
    {
        example: () => <CircleNumber3 />,
    },
);
