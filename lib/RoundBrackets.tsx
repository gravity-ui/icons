import * as React from 'react';
import type {SVGProps} from 'react';
const RoundBrackets = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M11.415 1.415a.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l.001.001a8.3 8.3 0 0 1 1.752 2.58A8.3 8.3 0 0 1 13.84 8a8.3 8.3 0 0 1-.686 3.312 8.3 8.3 0 0 1-1.763 2.59.48.48 0 0 0-.159.358.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166 9.3 9.3 0 0 0 1.967-2.894A9.2 9.2 0 0 0 14.838 8q0-1.935-.768-3.709a9.3 9.3 0 0 0-1.963-2.89l-.001-.002a.48.48 0 0 0-.346-.13.48.48 0 0 0-.345.146ZM4.6 2.107v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13V1.4h-.001A9.3 9.3 0 0 0 1.93 4.292 9.2 9.2 0 0 0 1.162 8q0 1.935.768 3.709a9.3 9.3 0 0 0 1.963 2.89l.001.002q.147.134.346.13a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346H4.6l-.001-.001a8.3 8.3 0 0 1-1.752-2.58A8.3 8.3 0 0 1 2.16 8q0-1.726.686-3.312a8.3 8.3 0 0 1 1.752-2.58z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default RoundBrackets;
