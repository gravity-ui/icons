import figma from '@figma/code-connect';

import ObjectAlignTop from '../lib/ObjectAlignTop';

figma.connect(
    ObjectAlignTop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A973',
    {
        example: () => <ObjectAlignTop />,
    },
);
