import React, { useState, useEffect} from 'react'
import axios from 'axios';

function Pokemon() {
    const [num, setnum] = useState();
    const [name, setname] = useState();
    const [moves, setmoves] = useState();

    

    useEffect(() => {

      async function getdata () {
        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(api.data.name);
        setname(api.data.name);
        setmoves(api.data.moves.length);
      }
getdata();
    })
    
    const onChangefn = (event) => {
        setnum(event.target.value); 
    }

  return (
    <>
        <div className='container mt-3 d-flex justify-content-between'>
        
        <select className="form-select mt-3 w-25 h-50 me-5" aria-label="Default select example" value={num} onChange={onChangefn}>
  
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="25">Twenty five</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
  <option value="9">Nine</option>
  <option value="10">Ten</option>
  <option value="11">Eleven</option>
</select>



<div className='container '>
<h1 className='mt-3 '>YOU HAVE CHOOSE     <span className='text-danger'> {name} </span> .</h1>
<h1 className='mt-3  '>  <span className='text-primary'> {name} </span> HAS   <span className='text-success'> {moves} </span> MOVES .</h1>
</div>
</div>
    </>
    
  )
}

export default Pokemon;