import axios from 'axios';


export default class BestBuyservice {

    getProducts() {

        return axios.get('https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=wgd9fp6cujtdn27wm9k8rtdg&sort=name.asc&show=name,regularPrice,shortDescription,manufacturer,image,sku,inStoreAvailability&pageSize=25&format=json');

    }
}