import figma from '@figma/code-connect';

import ObjectsAlignBottom from '../lib/ObjectsAlignBottom';

figma.connect(
    ObjectsAlignBottom,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3861%3A87799',
    {
        example: () => <ObjectsAlignBottom />,
    },
);
