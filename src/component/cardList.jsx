import React from "react";
import Card from "./card";

const CardsList = ({ robots, searchRobots }) => {
    let robotList = '';
    let filterRobots = '';

    if (searchRobots) {
        filterRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchRobots.toLocaleLowerCase());
        })
    }

    !filterRobots ? robotList = robots :
        robotList = filterRobots;

    const rednerRobots = (robotsLists) => {
        robotList = robotsLists.map((robot, i) => {
            return <Card
                key={i}
                id={robot.id}
                name={robot.name}
                email={robot.email} />
        })
    }

    rednerRobots(robotList);

    return (
        <>
            {
                robotList

            }
        </>
    )

}

export default CardsList;




//!  if(!ro) here i'm really checking instead i'm just checking reversing

//*if we have the falsy value and we want to check like if the value is falsy then the way we do it we do like if (l) then we put the ! what it does it reverse the condition like true since the if only executes if the value is true so if the value is falsy it becomes true and if not it becomes true