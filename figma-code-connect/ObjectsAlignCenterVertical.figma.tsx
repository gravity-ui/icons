import figma from '@figma/code-connect';

import ObjectsAlignCenterVertical from '../lib/ObjectsAlignCenterVertical';

figma.connect(
    ObjectsAlignCenterVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3861%3A87783',
    {
        example: () => <ObjectsAlignCenterVertical />,
    },
);
