import axios from 'axios';


export default class locations {

    getLocations() {
        return  [ {
            "name": "Independence Palace",
            "address": "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, Hồ Chí Minh 700000",
            "coords": {
              "latitude": 10.7747201,
              "longitude": 106.69930120000004
            },
            "image_url": "https://media.glassdoor.com/l/de/cd/ae/b6/the-face-shop.jpg"
          },
          {
            "name": "Turtle Lake",
            "address": "Turtle Lake, phường 6, District 3, Ho Chi Minh City",
            "coords": {
              "latitude": 10.780060,
              "longitude": 106.693410
            },
            "image_url": "http://dreamercosmetic.com/uploads/source/chekd101/trangdiem/bomyphamchanel5moncaocap11600x450.jpg"
          }]

       // return axios.get('https://api.bestbuy.com/v1/stores?apiKey=wgd9fp6cujtdn27wm9k8rtdg&show=hoursAmPm,lat,lng,name&pageSize=25&format=json')
    }
}