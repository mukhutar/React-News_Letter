import { useState } from 'react';
import './App.css';
import Circle from './Circle';
import Circle2 from './Circle2';
import db from './FireBase';  // Assuming this file exports the Firebase app instance with Firestore initialized
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function App() {
  const [submit, setSubmit] = useState('');
  const [message, setMessage] = useState('');
  const[errorMessage , setError] = useState('');

  const Submitletter = async (e) => {
    e.preventDefault();

    if (submit) {
      console.log(submit);
      setTimeout(() =>{
        setMessage('u have subcribedto our newsletter')
        setError('')
        setSubmit('')
      }, 1000)
      // Add to firebase
      try {
        const docRef = await addDoc(collection(db, "emails"), {
          Email: submit,
          time: serverTimestamp(),
        });
        setSubmit('')
      } catch (error) {
        console.error("Error adding document: ", error);
        setError('sorry ')
        setMessage('')

      }
    }
  };

  return (
    <div className="App">
      <Circle />
      <Circle2 />
      <form className='form' action="" onSubmit={Submitletter}>
        <h2 className='Heading'>Subscribe to our newsletter</h2>
        {message && (
          <h1>{message}</h1>
        )}
        <input className='inptt' type="email" onChange={e => setSubmit(e.target.value)} />
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
