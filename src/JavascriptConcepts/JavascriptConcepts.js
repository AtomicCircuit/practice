import React from 'react'

export default function JavascriptConcepts() {
    //Higher Order Functions
    const greet=(greeting)=>{
        return (name)=>{
            console.log(`${greeting} ${name}`)
        }
    }
    const greetArrow=greeting=>name=>{
            console.log(`${greeting} ${name}`);
    }
    //const greetHey=greet('Hey');
    //console.log(greetHey);
    //greetHey('Anshu');
    //greetHey('Palak');
    greet('Hello')('Mivan');
    greetArrow('Hey')('Anshu');
    const exampleGreet =(names)=>{
        console.log(names);
    }
    exampleGreet();
  return (
    <div>Hello
    </div>
  )
}
