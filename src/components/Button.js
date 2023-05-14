import { memo } from 'react';
function Button({className, children,onclick,abled}) {
    return (
        <>
            <button disabled={abled} onClick={onclick} type="button" className={className}>
                {children}
            </button>
        </>

    )
}

export default memo(Button);