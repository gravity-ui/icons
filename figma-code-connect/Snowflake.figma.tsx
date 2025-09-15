import figma from '@figma/code-connect';

import Snowflake from '../lib/Snowflake';

figma.connect(
    Snowflake,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A137',
    {
        example: () => <Snowflake />,
    },
);
