import React from 'react';
import {cn} from './cn';
import {Meta, StoryFn} from '@storybook/react';
import {Button, Icon as IconWrapper} from '@gravity-ui/uikit';
import {IconTooltip} from './IconTooltip/IconTooltip';
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

const b = cn('showcase');
const libContext = require.context('../../lib', false, /\.tsx$/);
const iconsMetadataByName = (metadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);

export const Showcase: StoryFn = () => {
    const [search, setSearch] = React.useState('');
    const items = libContext.keys().map((path) => {
        const module = libContext(path) as any;
        const Icon = module.default || module;
        const name = path.match(/(\w+)\.tsx$/)?.[1] ?? '';
        const meta = iconsMetadataByName[name];

        return {
            meta,
            Icon,
        };
    });

    let filteredItems;

    if (search.length === 0) {
        filteredItems = items;
    } else {
        const searchLower = search.toLowerCase().trim();
        filteredItems = items.filter(({meta}) => {
            return (
                meta.name.toLowerCase().includes(searchLower) ||
                meta.componentName.toLowerCase().includes(searchLower) ||
                meta.keywords.some((keyword: string) => keyword.toLowerCase().includes(searchLower))
            );
        });
    }

    return (
        <div className={b()}>
            <div className={b('search')}>
                <input
                    type="text"
                    placeholder="Search"
                    autoFocus
                    className={b('search-input')}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={b('items')}>
                {filteredItems.length > 0 ? (
                    filteredItems.map(({meta, Icon}) => (
                        <IconTooltip
                            key={meta.svgName}
                            componentName={meta.componentName}
                            importSvg={buildIconSvgPath(meta.svgName, meta.componentName)}
                            importComponent={buildIconImportLine(meta.componentName)}
                            forceOpen={filteredItems.length === 1}
                        >
                            <Button view="flat" size="xl">
                                <IconWrapper data={Icon} size={24} />
                            </Button>
                        </IconTooltip>
                    ))
                ) : (
                    <div className={b('empty')}>Nothing found :(</div>
                )}
            </div>
        </div>
    );
};
Showcase.storyName = 'Showcase';

function buildIconSvgPath(svgName: string, componentName: string) {
    return `import ${componentName}Icon from '@gravity-ui/icons/svgs/${svgName}.svg';`;
}

function buildIconImportLine(componentName: string) {
    return `import {${componentName}} from '@gravity-ui/icons';`;
}
