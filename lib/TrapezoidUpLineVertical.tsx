import * as React from 'react';
import type {SVGProps} from 'react';
const TrapezoidUpLineVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 .25a.48.48 0 0 0-.354.146A.48.48 0 0 0 7.5.75V2q0 .25-.25.25H5.016q-.795 0-1.412.499a2.2 2.2 0 0 0-.787 1.274l-1.517 7a2.15 2.15 0 0 0 .448 1.89q.675.837 1.752.837h3.75q.25 0 .25.25v1.25q0 .207.146.354A.48.48 0 0 0 8 15.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V14q0-.25.25-.25h3.75q1.077 0 1.752-.837.675-.838.448-1.89l-1.517-7a2.2 2.2 0 0 0-.787-1.275 2.2 2.2 0 0 0-1.412-.498H8.75q-.25 0-.25-.25V.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 .25Zm.5 3.25q0-.25.25-.25h2.233q.441 0 .785.277.345.276.437.708l1.516 7q.127.585-.248 1.05t-.973.465H8.75q-.25 0-.25-.25zm-3.484-.25H7.25q.25 0 .25.25v9q0 .25-.25.25H3.5q-.598 0-.974-.465-.375-.465-.248-1.05l1.517-7q.093-.43.437-.708.342-.277.784-.277Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TrapezoidUpLineVertical;
