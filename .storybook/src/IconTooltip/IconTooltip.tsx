import React from 'react';
import block from 'bem-cn-lite';
import {Popover, PopoverInstanceProps, Label} from '@gravity-ui/uikit';

import './IconTooltip.scss';

export interface IconTooltipProps {
    componentName: string;
    importSvg: string;
    importComponent: string;
    children: React.ReactElement;
    forceOpen?: boolean;
}

const b = block('icon-tooltip');

export function IconTooltip({
    componentName,
    importSvg,
    importComponent,
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
                <div className={b('label')}>Svg</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importSvg}>
                        {importSvg}
                    </Label>
                </div>
                <div className={b('label')}>Component</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importComponent}>
                        {importComponent}
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
            openOnHover={false}
        >
            {children}
        </Popover>
    );
}
