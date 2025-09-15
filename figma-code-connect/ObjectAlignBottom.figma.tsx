import figma from '@figma/code-connect';

import ObjectAlignBottom from '../lib/ObjectAlignBottom';

figma.connect(
    ObjectAlignBottom,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A987',
    {
        example: () => <ObjectAlignBottom />,
    },
);
