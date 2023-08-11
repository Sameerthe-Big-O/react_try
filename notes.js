//!one thing is that if we've any variable and if we want to put in the html then we've to use the curly brackets


//*underneath what react is doing is actually letting us create the html but they're the actuall html right it's te jsx, because the react creates it's own virtual dom,it's looks for the dom and said i need to change that shit,createa the virtaul dom based on the jsx and then compares it and then change it

//*the most imp thing is that when we've to render the method in the class based compoment and also that the we have to return 
let content;
let value = true;
if (value) {
    content = <h1>sameer</h1>;
} else {
    content = <h1>No sameer</h1>;
}


//*if there's something we want to access throught and dynamically render then what we've to do is like we're to use the curly brackets to get into the js , espically for the 
//*we can aslo set the whole component is equal to the varible but then if we want to rende then we've to use the  curku brackets


<button onClick=handleClick() >
    Click me
</button >

    //*we cannot directly call the function what we've to do is that we need to basically we escape in the javascrit



    function Greeting(prop) {

        return <h1>Hello, {prop.name}!</h1>;
    }

    //*this is just the anohter way of passing the prop and then we have to acess


    < Greeting name = "Sara" />
        what this is mean is that component has the prop object which's name and then we're accessing it or we can aslo destrcture it



//*you see that we can directly drstrcut the exacat name as well since it's not the direct nested object        function Greeting({name}) {
return <h1>Hello, {name}!</h1>;
          }


//*also that we cannot really use the useState in class based compoment



//*as we already know that we c't return the multiple tags form return then we've to trapped in the div or emoty t
//!we can avoid all of this by using the fragment by importing and then directly using it



/!
//*here we're assigning the count as the 0 for the starting value
// const [count, setCount] = useState(0);
//*the setCount function here what it does is basically remembers the count previous value and increment it 
//*sa soon page will ger refresh then the useSatete will forgot about the time count.//*also that if we displayy not make the componet separate and have the same html a nd both are calling the same event like setCoutnt then if i click on one the other one will also get updated
return (
    <button onClick={handleClick}>
    Clicked {count} times
  </button>
    <button onClick={handleClick}>
    Clicked {count} times
  </button>
  _)


//*also that if want our component to share the states together data then what we can do is just simply move the use state from the compone and placed in the component that contain those componentst


function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

//*for the separate state

//!remember that we give the props in the cury bracktes\

//*component are seen as the object remember that



//!props


//*({ greetings }) a w



//*the virtaul dom keeps track of the componentand to do tha we need to pass the key if there's the list of the items like if i've the parent that has the multiple childs then what we've to do is to simply give the key, so instead of changing the whole dom we know that ahh we only need to change the this element and it'll identify that minimize the dom work


//*key prop should have something that shouldnt be change also should be unique


//