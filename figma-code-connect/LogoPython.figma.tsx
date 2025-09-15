import figma from '@figma/code-connect';

import LogoPython from '../lib/LogoPython';

figma.connect(
    LogoPython,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A233',
    {
        example: () => <LogoPython />,
    },
);
