import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com/albums"

const getAlbumPics = async (albumID) => {
    const albumPics = await axios.get(`${baseURL}/${albumID}/photos`)
    return albumPics
}

export default getAlbumPics