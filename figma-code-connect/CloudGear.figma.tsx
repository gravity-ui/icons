import figma from '@figma/code-connect';

import CloudGear from '../lib/CloudGear';

figma.connect(
    CloudGear,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A148',
    {
        example: () => <CloudGear />,
    },
);
