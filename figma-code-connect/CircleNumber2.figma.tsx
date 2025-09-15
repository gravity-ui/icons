import figma from '@figma/code-connect';

import CircleNumber2 from '../lib/CircleNumber2';

figma.connect(
    CircleNumber2,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A208',
    {
        example: () => <CircleNumber2 />,
    },
);
