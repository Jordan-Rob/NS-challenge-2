import {useState} from 'react'

function App() {
  const [ albumID, setAlbumID ] = useState(null)

  const handleChange = (event) => {
    setAlbumID(event.target.value)
    console.log(albumID)
  }

  const formHandler = (event) => {
      event.preventDefault()
  }

  return (
    <div className="App">
      <section>
        <div>
          <form  onSubmit={ formHandler }>
            <input onChange= { handleChange } value={albumID} placeholder='Enter Id' type='number' required></input>
            <button type="submit">Get Album Photos By ID</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;
