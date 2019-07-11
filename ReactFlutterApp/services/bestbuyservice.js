import axios from 'axios';


export default class BestBuyservice {

    getProducts(searchTerm = "laptop") {

        return axios.get(`https://api.bestbuy.com/v1/products((search=${searchTerm}))?apiKey=wgd9fp6cujtdn27wm9k8rtdg&sort=regularPrice.dsc&show=image,name,regularPrice,sku,shortDescription,inStoreAvailability,manufacturer&pageSize=30&format=json`);
    }


}