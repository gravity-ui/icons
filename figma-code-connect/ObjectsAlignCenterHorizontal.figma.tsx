import figma from '@figma/code-connect';

import ObjectsAlignCenterHorizontal from '../lib/ObjectsAlignCenterHorizontal';

figma.connect(
    ObjectsAlignCenterHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3861%3A87716',
    {
        example: () => <ObjectsAlignCenterHorizontal />,
    },
);
