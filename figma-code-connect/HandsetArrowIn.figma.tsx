import figma from '@figma/code-connect';

import HandsetArrowIn from '../lib/HandsetArrowIn';

figma.connect(
    HandsetArrowIn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=16189%3A1158',
    {
        example: () => <HandsetArrowIn />,
    },
);
