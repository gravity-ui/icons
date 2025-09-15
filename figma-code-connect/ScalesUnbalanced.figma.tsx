import figma from '@figma/code-connect';

import ScalesUnbalanced from '../lib/ScalesUnbalanced';

figma.connect(
    ScalesUnbalanced,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5827%3A81',
    {
        example: () => <ScalesUnbalanced />,
    },
);
