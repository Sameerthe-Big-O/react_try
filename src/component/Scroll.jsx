import React from "react";

const Scroll = (props) => {

    return (
        <>
            <div style={{ overflowY: 'auto', height: '1500px' }}>
                {props.children}
            </div>
        </>
    )
}

export default Scroll;

//*so if there's tag that's not the self-containing tag they we still that you should render something is by doing or giving the children and the thing is that when we give that certain html based tag or the component to the tag as the parent

//*the thing is that even thought we don't pas the props every react element has that object and the thing is that and if the element has both brackets then what happened is that it got the children like the component and then it renders that element into that element

//*the parent use the children as a way to render it's children