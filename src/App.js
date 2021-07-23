import {useState} from 'react'
import getAlbumPics from './services/albumPics'

function App() {
  const [ albumID, setAlbumID ] = useState(null)
  const [ pics, setPics] = useState([])

  const handleChange = (event) => {
    if ( event.target.value === null){
      pics.splice(0, pics.length)
    }
    else{
      setAlbumID(event.target.value)
      console.log(albumID)
    }
  }

  

  const formHandler = (event) => {
      event.preventDefault()

      getAlbumPics(albumID)
        .then( response => {
          pics.splice(0, pics.length)
          setPics(pics.concat(response.data))
        })
        .catch( error => {
            console.log(error)
          }
        )  
      
  }

  return (
    <div className="App">
      <section className='inputSection container'>
        <h2>SEARCH PHOTO APP</h2>
        <div>
          <form  onSubmit={ formHandler }>
            <input className="shadow"  onChange= { handleChange } value={albumID} placeholder='Enter Id' type='number' required></input>
            <button className="shadow" type="submit">Get Album Photos By ID</button>
          </form>
        </div>
      </section>

      <section className='cardSection container'>

        {
          pics.length > 1? <div className='cards row'>
            {
                pics.map( 
                  pic => <div key={pic.id} className='shadow card col-lg-3 col-md-6 col-sm-12'>
                    <img src={pic.thumbnailUrl} alt='thumbnail' />
                    <p>{ pic.title }</p>
                  </div>
                )
            }
        </div>:
        <div id='tip'>Please enter valid Id to view photos</div>
        }
        
      </section>

    </div>
  );
}

export default App;
