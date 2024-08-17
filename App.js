
/**
 * creating nested div
 */

const parent = React.createElement("div",
    {id: "parent"}, 
    React.createElement("div",
        {id: "child"},[
            React.createElement("h1",{},"I am h1 tag"), 
            React.createElement("h2",{},"I am h2 tag")
        ])
    );


    const heading = React.createElement("h1",{
        id: "heading", 
        abc: "xyz"
    },"Hellow world! from React");

    
    const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);