import figma from '@figma/code-connect';

import ObjectAlignLeft from '../lib/ObjectAlignLeft';

figma.connect(
    ObjectAlignLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A953',
    {
        example: () => <ObjectAlignLeft />,
    },
);
