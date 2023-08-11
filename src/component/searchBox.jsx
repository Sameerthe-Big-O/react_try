import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <>
            <div>
                <input className="pa3 ba b--green bg-lightest-blue" placeholder="search for robots" type="search"
                    onChange={searchChange}
                >
                </input>
            </div>
        </>
    )
}

export default SearchBox;


//*states chnages but the props doesn't
//*updates accordingly


//*state is the object that describe your application
//*the parent give the states to the child Component


//*the target tells that which input or the which element was get click or get change like pin point and the value means if that was the input then we can actually reads the value


// document.getElementById("test1").onchange = (e) => {
//     console.log(e.value); // undefined
//     console.log(e.target.value); // works
//   }
  
//   let handleSelect = (e) => {
//     console.log(e.value); // works
//     console.log(e.target.value); // e.target is undefined
//   }
  