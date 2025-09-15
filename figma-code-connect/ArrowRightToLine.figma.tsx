import figma from '@figma/code-connect';

import {ArrowRightToLine} from '../lib';

figma.connect(
    ArrowRightToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A738',
    {
        example: () => <ArrowRightToLine />,
    },
);
