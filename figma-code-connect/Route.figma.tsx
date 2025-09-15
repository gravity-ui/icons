import figma from '@figma/code-connect';

import Route from '../lib/Route';

figma.connect(
    Route,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A156',
    {
        example: () => <Route />,
    },
);
