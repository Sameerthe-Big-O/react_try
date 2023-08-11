import React from "react";
// import { Fragment } from 'react';

const Card = ({ name, id, email }) => {
    return (
        <>
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="Robots" src={`https://robohash.org/${id}200*200`}>
                </img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </>
    )
}
export default Card;
// function MyButton({}) {
//     const [count, setCount] = useState(0);
//     console.log(greetings)
//     function handleClick() {
//         setCount(count + 1);
//     }
//     return (
//         <button onClick={onClick}>
//             Clicked {count} times
//         </button>
//     );
// }

