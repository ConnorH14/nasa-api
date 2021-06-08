import axios from 'axios'
import { AppState } from '../AppState'

// https://api.nasa.gov/planetary/apod?api_key=gWboo9rSwP5aYzRg4M9hSnVizj8MyDYcpdmVfC0A&date=2017-07-08
class PicturesService {
  async findPictures() {
    console.log(AppState.currentQuery)
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=gWboo9rSwP5aYzRg4M9hSnVizj8MyDYcpdmVfC0A&date=' + AppState.currentQuery)
    AppState.currentImage = res.data
    console.log(AppState.currentImage)
  }
}

export const pictureService = new PicturesService()
