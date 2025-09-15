import figma from '@figma/code-connect';

import DatabaseArrowRight from '../lib/DatabaseArrowRight';

figma.connect(
    DatabaseArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A62',
    {
        example: () => <DatabaseArrowRight />,
    },
);
