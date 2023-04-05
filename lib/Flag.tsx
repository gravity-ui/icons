import * as React from 'react';
import {SVGProps} from 'react';
const Flag = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3 2.856V8.98a14.411 14.411 0 0 0 10 .007V2.866a15.56 15.56 0 0 1-10-.01Zm11.5 6.627V1.919a.843.843 0 0 0-1.162-.78 14.06 14.06 0 0 1-10.26.152l-.43-.161a.85.85 0 0 0-1.148.795v12.356a.75.75 0 1 0 1.5 0V10.57a15.911 15.911 0 0 0 11.034-.376.75.75 0 0 0 .466-.711Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Flag;
