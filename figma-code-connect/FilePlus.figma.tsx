import figma from '@figma/code-connect';

import FilePlus from '../lib/FilePlus';

figma.connect(
    FilePlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A446',
    {
        example: () => <FilePlus />,
    },
);
