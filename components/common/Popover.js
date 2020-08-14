import React, { useEffect, useRef } from 'react';


/* USAGE: 
    <PopOver
        popoverSrcClassNames=ARRAY,
        className='string'
        isPopoverOpen=boolean
        togglePopOver=callBack function
    >
        {popoverContent}
    <PopOver/>

    popoverSrcClassNames: Array that contains classNames of the elements that trigger the popover.
    className: className of the popover
    isPopoverOpen: flag to determine whether to display or hide popover.
    togglePopOver: callBack function that toggles isPopoverOpen flag.
    popoverContent is the contents of PopOver.

    NOTE: PopOver's position is "absolute" by default. It's parent's position should be set to "relative".
}*/

const PopOver = (props) => {
    const popoverRef = useRef();

    useEffect(() => {
        document.body.addEventListener('click', clickListener, true);
        return () => {document.body.removeEventListener('click', clickListener, true);}
    }, [props.isPopoverOpen]);

    const clickListener = (event) => {
        let { togglePopOver, popoverSrcClassNames = [] } = props;
        const currentDropRef = popoverRef.current;
        let isSourceParent = false;
        const targetClassArray = event.target.className.split(' ');
        targetClassArray.forEach((targetClass) => {
            if(popoverSrcClassNames.includes(targetClass)) {
                isSourceParent = true;
                return ;
            }
        });
        const isSourcePopover = currentDropRef && currentDropRef.contains && currentDropRef.contains(event.target);
        // if clicked source is parent or the popover-content, do not toggle dropdown.
        if(!currentDropRef || isSourceParent || isSourcePopover) {
            return;
        }
        togglePopOver(event);
    };

    const { isPopoverOpen = false, className = '' } = props;

    return (
        <React.Fragment>
            {isPopoverOpen &&
                <div className={className + ' popover'} ref={popoverRef}>
                    {props.children}
                </div>
            }
        </React.Fragment>
    );
};

export default PopOver;