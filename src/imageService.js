export class ImageServices{
  async getImageService() {
    try {
      let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=IIPmVWdCdZbCOucvhht3oU3M1633130yNbpExrgW`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
