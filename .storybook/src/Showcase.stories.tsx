import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button, Icon as IconWrapper, Popover, Tooltip, Text} from '@gravity-ui/uikit';
import metadata from '../../metadata.json';

import './Showcase.stories.scss';
import {Code} from './Code';

export default {
    title: 'Showcase',
    id: 'showcase',
} as Meta;

interface IconMeta {
    name: string;
    style: 'regular' | 'fill';
    svgName: string;
    componentName: string;
    aliases: string[];
}

const libContext = require.context('../../lib', false, /\.tsx$/);
const iconsMetadataByName = (metadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);

type PopoverContentProps = {
    name: string;
    svgName: string;
};

const PopoverContent = ({name, svgName}: PopoverContentProps) => {
    const optionsToCopy = {
        'Default export': `import ${name} from '@gravity-ui/icons/${name}';`,
        'Named export': `import {${name}} from '@gravity-ui/icons';`,
        SVG: `import ${
            name[0].toLowerCase() + name.substring(1)
        }Icon from '@gravity-ui/icons/svgs/${svgName}.svg';`,
    };

    return (
        <div className="showcase__popover-wrapper">
            {Object.entries(optionsToCopy).map(([key, value]) => (
                <React.Fragment key={key}>
                    <Text variant="body-1">{key}:</Text>
                    <Code text={value} showCopyIcon />
                </React.Fragment>
            ))}
        </div>
    );
};

export const Showcase: Story = () => {
    const [search, setSearch] = React.useState('');

    const items = libContext.keys().map((path) => {
        const module = libContext(path);
        const Icon = module.default || module;
        const name = path.match(/(\w+)\.tsx$/)?.[1] ?? '';
        const {svgName} = iconsMetadataByName[name];

        return {
            name,
            svgName,
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
                meta.aliases.some((alias: string) => alias.includes(search))
            );
        });
    }

    const handlePopoverClick = React.useCallback(() => true, []);

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
                <p className="showcase__search-description">click on icon to show code</p>
            </div>
            <Popover />
            <div className="showcase__items">
                {filteredItems.length > 0 ? (
                    filteredItems.map(({name, Icon, svgName}) => (
                        <Popover
                            key={name}
                            onClick={handlePopoverClick}
                            content={<PopoverContent name={name} svgName={svgName} />}
                            tooltipClassName="showcase__popover-tooltip"
                            placement={['top', 'right']}
                            hasArrow={false}
                            openOnHover={false}
                        >
                            <Tooltip content={name} openDelay={250}>
                                <Button view="flat" size="xl">
                                    <IconWrapper data={Icon} size={24} />
                                </Button>
                            </Tooltip>
                        </Popover>
                    ))
                ) : (
                    <div className="showcase__empty">Nothing found :(</div>
                )}
            </div>
        </div>
    );
};
Showcase.storyName = 'Showcase';
