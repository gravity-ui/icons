import figma from '@figma/code-connect';

import {FileArrowRightOut} from '../lib';

figma.connect(
    FileArrowRightOut,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4075%3A88226',
    {
        example: () => <FileArrowRightOut />,
    },
);
