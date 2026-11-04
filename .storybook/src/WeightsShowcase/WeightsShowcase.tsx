import React from 'react';

import {Icon as IconWrapper, SegmentedRadioGroup, Text, TextInput} from '@gravity-ui/uikit';

import {cn} from '../cn';

import metadata from '../../../metadata.json';

import './WeightsShowcase.scss';

interface IconModule {
    default: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface IconMeta {
    name: string;
    style: 'regular' | 'fill';
    svgName: string;
    componentName: string;
    keywords: string[];
}

const STROKE_WIDTH_VARIABLE = '--g-icon-stroke-width';
const COMPARED_STROKE_WIDTHS = ['1', '1.5', '2'];
const VIEWS = [
    {value: 'compare', content: 'Compare'},
    ...['1', '1.25', '1.5', '1.75', '2'].map((value) => ({value, content: `${value}px`})),
];
const SIZES = [16, 24, 32, 48].map((value) => ({value: String(value), content: `${value}px`}));

const b = cn('weights-showcase');
const libContext = require.context('../../../lib', false, /\.tsx$/);
const iconsMetadataByName = (metadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);
// Only regular icons take their stroke width from the variable.
const items = libContext
    .keys()
    .map((path) => {
        const name = path.match(/(\w+)\.tsx$/)?.[1] ?? '';

        return {meta: iconsMetadataByName[name], Icon: (libContext(path) as IconModule).default};
    })
    .filter(({meta}) => meta.style === 'regular');

function withStrokeWidth(strokeWidth: string) {
    return {[STROKE_WIDTH_VARIABLE]: strokeWidth} as React.CSSProperties;
}

export function WeightsShowcase() {
    const [search, setSearch] = React.useState('');
    const [view, setView] = React.useState('compare');
    const [size, setSize] = React.useState('24');
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
            <div className={b('controls')}>
                <TextInput
                    className={b('search')}
                    placeholder="Search"
                    size="l"
                    autoFocus
                    hasClear
                    value={search}
                    onUpdate={setSearch}
                />
                <SegmentedRadioGroup size="l" value={view} onUpdate={setView} options={VIEWS} />
                <SegmentedRadioGroup size="l" value={size} onUpdate={setSize} options={SIZES} />
            </div>
            <div
                className={b('items', {view: view === 'compare' ? 'compare' : 'single'})}
                style={
                    {
                        '--weights-showcase-icon-size': `${size}px`,
                        ...(view === 'compare' ? undefined : withStrokeWidth(view)),
                    } as React.CSSProperties
                }
            >
                {filteredItems.length === 0 && <div className={b('empty')}>Nothing found :(</div>}
                {filteredItems.map(({meta, Icon}) =>
                    view === 'compare' ? (
                        <div key={meta.svgName} className={b('card')} title={meta.componentName}>
                            <div className={b('card-icons')}>
                                {COMPARED_STROKE_WIDTHS.map((strokeWidth) => (
                                    <IconWrapper
                                        key={strokeWidth}
                                        data={Icon}
                                        size={Number(size)}
                                        style={withStrokeWidth(strokeWidth)}
                                    />
                                ))}
                            </div>
                            <Text
                                className={b('card-name')}
                                variant="caption-2"
                                color="secondary"
                                ellipsis
                            >
                                {meta.componentName}
                            </Text>
                        </div>
                    ) : (
                        <div key={meta.svgName} className={b('icon')} title={meta.componentName}>
                            <IconWrapper data={Icon} size={Number(size)} />
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
