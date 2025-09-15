import figma from '@figma/code-connect';

import ObjectsAlignJustifyHorizontal from '../lib/ObjectsAlignJustifyHorizontal';

figma.connect(
    ObjectsAlignJustifyHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A923',
    {
        example: () => <ObjectsAlignJustifyHorizontal />,
    },
);
