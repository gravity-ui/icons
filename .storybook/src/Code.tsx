import {ClipboardIcon, CopyToClipboard, Text} from '@gravity-ui/uikit';
import React from 'react';
import './Code.scss';

type CodeProps = {
    text: string;
    showCopyIcon?: boolean;
};

export const Code = ({text, showCopyIcon = false}: CodeProps) => {
    console.log(showCopyIcon);
    if (showCopyIcon) {
        return (
            <CopyToClipboard text={text} timeout={1000}>
                {(state) => (
                    <div className="code__wrapper code__wrapper_copyable">
                        <Text variant="code-1" ellipsis className="code__code">
                            {text}
                        </Text>
                        <ClipboardIcon size={16} status={state} />
                    </div>
                )}
            </CopyToClipboard>
        );
    }

    return (
        <div className="code__wrapper">
            <Text variant="code-1" ellipsis className="code__code">
                {text}
            </Text>
        </div>
    );
};
