import {useState} from 'react'
import getAlbumPics from './services/albumPics'

function App() {
  const [ albumID, setAlbumID ] = useState(null)
  const [ pics, setPics] = useState([])

  const handleChange = (event) => {
    setAlbumID(event.target.value)
    console.log(albumID)
  }

  const formHandler = (event) => {
      event.preventDefault()

      getAlbumPics(albumID)
        .then( response => {
          pics.splice(0, pics.length)
          setPics(pics.concat(response.data))
        })
      
  }

  return (
    <div className="App">
      <section className='inputSection'>
        <div>
          <form  onSubmit={ formHandler }>
            <input onChange= { handleChange } value={albumID} placeholder='Enter Id' type='number' required></input>
            <button type="submit">Get Album Photos By ID</button>
          </form>
        </div>
      </section>

      <section className='cardSection'>

        {
          albumID && <div className='cards'>
            {
              pics.length < 1? <p>Loading...</p>:
                pics.map( 
                  pic => <div key={pic.id} className='card'>
                    <img src={pic.thumbnailUrl} alt='thumbnail' />
                    <p>{ pic.title }</p>
                  </div>
                ).slice(0, 10)
            }
        </div>
        }
        
      </section>

    </div>
  );
}

export default App;
