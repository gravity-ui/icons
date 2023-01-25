import * as React from 'react';
import {SVGProps} from 'react';
const CrownDiamond = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="m8.427 11.073 1.205-1.205a.402.402 0 0 0 .118-.285.805.805 0 0 0-.236-.569L8.427 7.927a.603.603 0 0 0-.854 0L6.486 9.014a.805.805 0 0 0-.236.57c0 .106.042.208.118.284l1.205 1.205a.604.604 0 0 0 .854 0Z" />
            <path d="M16 5.796v-.028a1.768 1.768 0 0 0-3.018-1.25l-.76.76-.024.024-.374.374-.415.415a.335.335 0 0 1-.561-.149l-.155-.566-.139-.51-.009-.033-.65-2.386a1.964 1.964 0 0 0-3.79 0l-.65 2.386-.01.032-.139.511-.154.566a.335.335 0 0 1-.56.15l-.416-.416-.374-.374-.024-.024-.76-.76A1.768 1.768 0 0 0 0 5.768v.028c0 .135.015.27.046.403l1.3 5.631a1.4 1.4 0 0 0 .778.958 14.021 14.021 0 0 0 11.752 0c.394-.182.681-.535.779-.958l1.299-5.63A1.84 1.84 0 0 0 16 5.796ZM3.53 7.152c.997.997 2.698.545 3.07-.815l.952-3.495a.464.464 0 0 1 .896 0L9.4 6.337c.37 1.36 2.072 1.812 3.068.815l1.574-1.574a.268.268 0 0 1 .457.19v.028a.291.291 0 0 1-.008.066l-1.288 5.584a12.522 12.522 0 0 1-10.408 0L1.508 5.862a.295.295 0 0 1-.008-.066v-.028a.268.268 0 0 1 .457-.19l1.574 1.574Z" />
        </g>
    </svg>
);
export default CrownDiamond;
