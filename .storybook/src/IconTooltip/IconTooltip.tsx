import React from 'react';

import {Label, Popover} from '@gravity-ui/uikit';

import {cn} from '../cn';

import './IconTooltip.scss';

export interface IconTooltipProps {
    componentName: string;
    importSvg: string;
    importComponent: string;
    children: React.ReactElement;
    forceOpen?: boolean;
}

const b = cn('icon-tooltip');

export function IconTooltip({
    componentName,
    importSvg,
    importComponent,
    forceOpen,
    children,
}: IconTooltipProps) {
    const [open, setOpen] = React.useState(false);
    const content = React.useMemo(
        () => (
            <div className={b('grid')}>
                <div className={b('label')}>Name</div>
                <div>
                    <Label type="copy" copyText={componentName}>
                        <div className={b('value')}>{componentName}</div>
                    </Label>
                </div>
                <div className={b('label')}>Svg</div>
                <div>
                    <Label type="copy" copyText={importSvg}>
                        <div className={b('value')}>{importSvg}</div>
                    </Label>
                </div>
                <div className={b('label')}>Component</div>
                <div>
                    <Label type="copy" copyText={importComponent}>
                        <div className={b('value')}>{importComponent}</div>
                    </Label>
                </div>
            </div>
        ),
        [],
    );

    return (
        <Popover
            open={forceOpen || open}
            onOpenChange={setOpen}
            content={content}
            placement={['bottom', 'top']}
            className={b()}
            trigger="click"
        >
            {children}
        </Popover>
    );
}
