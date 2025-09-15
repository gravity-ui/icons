import figma from '@figma/code-connect';

import ObjectAlignCenterHorizontal from '../lib/ObjectAlignCenterHorizontal';

figma.connect(
    ObjectAlignCenterHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A959',
    {
        example: () => <ObjectAlignCenterHorizontal />,
    },
);
