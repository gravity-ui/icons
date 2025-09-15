import figma from '@figma/code-connect';

import CloudSlash from '../lib/CloudSlash';

figma.connect(
    CloudSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22147%3A1432',
    {
        example: () => <CloudSlash />,
    },
);
