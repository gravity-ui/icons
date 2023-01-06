import React from 'react';
import block from 'bem-cn-lite';
import {Popover, PopoverInstanceProps, Label} from '@gravity-ui/uikit';

import './IconTooltip.scss';

export interface IconTooltipProps {
    componentName: string;
    svgPath: string;
    importLine: string;
    children: React.ReactElement;
    forceOpen?: boolean;
}

const b = block('icon-tooltip');

export function IconTooltip({
    componentName,
    svgPath,
    importLine,
    forceOpen,
    children,
}: IconTooltipProps) {
    const popoverRef = React.useRef<PopoverInstanceProps>();
    const content = React.useMemo(
        () => (
            <div className={b('grid')}>
                <div className={b('label')}>Name</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={componentName}>
                        {componentName}
                    </Label>
                </div>
                <div className={b('label')}>Path</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={svgPath}>
                        {svgPath}
                    </Label>
                </div>
                <div className={b('label')}>Import</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importLine}>
                        {importLine}
                    </Label>
                </div>
            </div>
        ),
        [],
    );

    React.useEffect(() => {
        if (!popoverRef.current) {
            return;
        }

        if (forceOpen) {
            popoverRef.current.openTooltip();
        } else {
            popoverRef.current?.closeTooltip();
        }
    }, [forceOpen]);

    return (
        <Popover
            ref={popoverRef}
            content={content}
            placement={['bottom', 'top']}
            tooltipClassName={b()}
        >
            {children}
        </Popover>
    );
}
