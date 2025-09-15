import figma from '@figma/code-connect';

import {FileMagnifier} from '../lib';

figma.connect(
    FileMagnifier,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A450',
    {
        example: () => <FileMagnifier />,
    },
);
