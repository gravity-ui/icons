import figma from '@figma/code-connect';

import ArrowShapeUpToLine from '../lib/ArrowShapeUpToLine';

figma.connect(
    ArrowShapeUpToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A775',
    {
        example: () => <ArrowShapeUpToLine />,
    },
);
