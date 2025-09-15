import figma from '@figma/code-connect';

import PersonWorker from '../lib/PersonWorker';

figma.connect(
    PersonWorker,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122441',
    {
        example: () => <PersonWorker />,
    },
);
