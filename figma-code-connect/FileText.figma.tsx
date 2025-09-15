import figma from '@figma/code-connect';

import FileText from '../lib/FileText';

figma.connect(
    FileText,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A684',
    {
        example: () => <FileText />,
    },
);
