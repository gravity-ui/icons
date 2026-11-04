import * as React from 'react';
import type {SVGProps} from 'react';
const Thunderbolt = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.063.565q-.348-.195-.616.1L2.704 8.113q-.436.482-.172 1.077t.913.595H6.21q.25 0 .25.25a.3.3 0 0 1-.013.08l-1.602 4.723q-.129.38.212.588.34.209.62-.078l7.542-7.779q.46-.476.202-1.086t-.92-.61H9.229q-.25 0-.25-.25 0-.036.01-.071l1.308-4.407q.114-.383-.234-.579ZM7.256 8.784H4.01a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177q0-.096.065-.168l4.15-4.585q.169-.186.354-.017.117.105.072.256l-.656 2.21a.48.48 0 0 0 .078.441q.15.201.401.201h3.687a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177.24.24 0 0 1-.07.174l-4.814 4.962a.24.24 0 0 1-.175.076.24.24 0 0 1-.178-.07.23.23 0 0 1-.063-.26l.87-2.56a.47.47 0 0 0-.068-.452.47.47 0 0 0-.407-.208Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Thunderbolt;
