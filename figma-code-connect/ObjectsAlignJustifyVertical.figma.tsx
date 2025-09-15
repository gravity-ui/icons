import figma from '@figma/code-connect';

import {ObjectsAlignJustifyVertical} from '../lib';

figma.connect(
    ObjectsAlignJustifyVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9374%3A931',
    {
        example: () => <ObjectsAlignJustifyVertical />,
    },
);
