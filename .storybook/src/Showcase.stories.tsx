import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, Icon as IconWrapper, Tooltip} from '@gravity-ui/uikit';
import metadata from '../../metadata.json';

import './Showcase.stories.scss';

export default {
    title: 'Showcase',
    id: 'showcase',
} as Meta;

interface IconMeta {
    name: string;
    style: 'regular' | 'fill';
    svgName: string;
    componentName: string;
    keywords: string[];
}

const libContext = require.context('../../lib', false, /\.tsx$/);
const iconsMetadataByName = (metadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);

export const Showcase: Story = () => {
    const [search, setSearch] = React.useState('');
    const items = libContext.keys().map((path) => {
        const module = libContext(path);
        const Icon = module.default || module;
        const name = path.match(/(\w+)\.tsx$/)?.[1] ?? '';

        return {
            name,
            Icon,
        };
    });

    let filteredItems;

    if (search.length === 0) {
        filteredItems = items;
    } else {
        filteredItems = items.filter(({name}) => {
            const meta = iconsMetadataByName[name];

            return (
                meta.name.includes(search) ||
                meta.keywords.some((keyword: string) => keyword.includes(search))
            );
        });
    }

    return (
        <div className="showcase">
            <div className="showcase__search">
                <input
                    type="text"
                    placeholder="Search"
                    autoFocus
                    className="showcase__search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="showcase__items">
                {filteredItems.length > 0 ? (
                    filteredItems.map(({name, Icon}) => (
                        <Tooltip key={name} content={name} openDelay={250}>
                            <Button view="flat" size="xl">
                                <IconWrapper data={Icon} size={24} />
                            </Button>
                        </Tooltip>
                    ))
                ) : (
                    <div className="showcase__empty">Nothing found :(</div>
                )}
            </div>
        </div>
    );
};
Showcase.storyName = 'Showcase';
