## gun-react

This is a React library for Gun



## Intro

This React library exposes the all Gun functionalities.

### Note
You can check the src/examples from the project directory for assistance.

### Install
```
npm install --save gun-react
```


### Sample Usage

```javascript

import React, { useState } from "react";
import { GunReact } from 'gun-react'

let config = {
  s3: {
    key: '',
    secret: '',
    bucket: ''
  },
  // simple JSON persistence (bundled)
  // meant for ease of getting started
  // NOT meant for production
  file: 'file/path.json',

  // set your own UUID function
  uuid: () => { }
}
const App = (props) => {

  React.useEffect(()=>{
    let { GunService } = props;
    if(GunService){
      GunService.get('user').on((data, key) => {
      console.log("previously saved data", data)
    });
  }
  })
    const submitValue = (e) => {
    e.preventDefault();
    const formDetails = {
      'FirstName': firstName,
      'LastName': lastName,
      'Age': age,
    }
    let { GunService } = props;
    GunService.get('user').put({
      ...formDetails
    });

    GunService.get('user').on((data, key) => {
      console.log("saved data", data)
      let result = data; // you can now get the saved data right here


    });
  }


  return (
      <div>
              <label>Firstname</label>
                <input id="textinput" name="firstname" onChange={e => setFirstName(e.target.value)} 
                type="text"></input><br/>
          
              <label>Lastname</label>
                <input id="textinput" name="lastname" type="text" onChange={e => setLastName(e.target.value)} 
               ></input><br/>
           
              <label >Age</label>
                <input id="textinput" name="age" type="number" placeholder="Age" onChange={e => setAge(e.target.value)}
                 ></input><br/>
          
                <button  onClick={submitValue} class="btn btn-success">Ok</button>
            </div>
   
  );
}
//GunReact accepts the normal Gun Configuration and a Component to Render and then returns GunService as a Property



export default GunReact(App, config);


```



## Contributing
1. Create your feature branch: `git checkout -b feature-name`
2. Commit your changes: `git commit -m 'Some commit message'`
3. Push to the branch: `git push origin feature-name`
4. Submit a pull request 

## How can I thank you?

Why not star the github repo? Share to Others too.

And don't forget to [follow me on twitter](https://twitter.com/allindeveloper)!


