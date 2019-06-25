import axios from 'axios';


export default class BestBuyservice {

    getProducts() {

        return axios.get('https://api.bestbuy.com/v1/products(inStoreAvailability=true&(categoryPath.id=abcat0502000))?apiKey=wgd9fp6cujtdn27wm9k8rtdg&sort=description.asc&show=description,image,inStoreAvailability,name,salePrice,thumbnailImage&facet=manufacturer,1&format=json');

    //     return [
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         }, 
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         },
    //         {
    //             name: 'MacBook Pro',
    //             avail: 'maybe',
    //             price:0,
    //             description: 'some stuff about this thing',
    //             thumbnail: 'iuyfiygci hk'
    //         }
    //     ]

    }
}