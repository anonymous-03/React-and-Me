import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

function App() {

  const [length, setlength] = useState(8);
  const [password, setPassword] = useState('');
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const inputref=useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMN0PQRSTUVWXYZabcdefghijklmnopqrstwvxyz";
    const num = "0123456789";
    const specchar = "~!@#$%^&*()";

    if (numAllowed) {
      str += num;
    }
    if (charAllowed) {
      str += specchar;
    }
    let pass = "";
    for (let index = 0; index < length; index++) {
      let char = Math.floor((Math.random() * str.length + 1));
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, charAllowed, numAllowed]);

  useEffect(() => {
    generatePassword();
  }
  , [length, charAllowed, numAllowed]);


  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password).then(() => {
      inputref.current.select();
      // alert("Password copied to clipboard");
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }, [password]);


  return (
    <>
      <div className='wrapper'>
        <div className='card text-orange-500'>
          <div className="input flex shadow rounded-lg overflow-hidden mb-4">
            <input type='text' ref={inputref} className='bg-white w-full rounded-l-full outline-none px-4 py-2 my-6' placeholder='password' value={password} readOnly></input>
            <button type='submit' onClick={copyToClipboard} className='shrink-0 bg-blue-700 rounded-r-full outline-none px-4 py-2 my-6'>Copy</button>
          </div>
          <div className="dependencies flex text-sm gap-x-2">
            <input type="range" className='shrink-0 cursor-pointer'
              value={length}
              id='slider'
              min={5}
              max={20}
              onChange={(e) =>{
                setlength(e.target.value)
                // generatePassword();
              }
               }
            />
            <label htmlFor="slider">Length({length})</label>
            <input type="checkbox" onClick={() => {
              setCharAllowed(!charAllowed);
            }} value={charAllowed} />
            <label htmlFor="">Characters</label>
            <input type="checkbox" value={numAllowed} onClick={() => {
              setNumAllowed(!numAllowed);
            }} />
            <label htmlFor="">Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
