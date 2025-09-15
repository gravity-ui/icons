import figma from '@figma/code-connect';

import ObjectsAlignTop from '../lib/ObjectsAlignTop';

figma.connect(
    ObjectsAlignTop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3861%3A87792',
    {
        example: () => <ObjectsAlignTop />,
    },
);
