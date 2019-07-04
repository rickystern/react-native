import axios from 'axios';


export default class locations {

    getLocations() {

      return axios.get('https://api.bestbuy.com/v1/stores?apiKey=wgd9fp6cujtdn27wm9k8rtdg&show=hoursAmPm,lat,lng,name&pageSize=25&format=json')
    }
}

//wgd9fp6cujtdn27wm9k8rtdg