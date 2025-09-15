import figma from '@figma/code-connect';

import {AbbrSql} from '../lib';

figma.connect(
    AbbrSql,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A768',
    {
        example: () => <AbbrSql />,
    },
);
