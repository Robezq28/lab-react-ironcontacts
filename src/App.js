import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';

function App() {
  let firstContacts = contacts.slice(0, 5)
  console.log(firstContacts)
  const [contactsList, setContactsList] = useState(firstContacts);
  const addContact = contactID => {
    const newContact = contactsList.push(contact => contact.id != contactID)
    setContactsList(newContact)
  }

  return (

    <>
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => addContact()}>Add random contact</button>
        <button>Sort by popularity</button>
        <button>SOrt by name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {firstContacts.map(contact => {
            return (
              <tr>
                <td key={contact.id}><img width='100px' src={contact.pictureUrl} /> </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>🏆 </p> : <p> </p>}</td>
                <td>{contact.wonEmmy ? <p>🏆 </p> : <p> </p>}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default App;
