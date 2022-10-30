import React, {useEffect} from 'react';

import axios from 'axios';

function App() {
  useEffect(()=> {
    axios.get('./apl/test')
    .then(res => console.log(res))
    .catch()
  })
}

export default App;
