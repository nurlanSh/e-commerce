module.exports = function(){
    return{
        products: [
            { id:1, name:"Samsung S5", price:1000, imageUrl:'s5.jpg', description:'Samsung Galaxy S5 (8GB)',category: 'Telefon' },
            { id:2, name:"Samsung S6", price:1500, imageUrl:'s6.jpg', description:'Samsung Galaxy S6 (16GB)',category: 'Telefon' },
            { id:3, name:"Samsung S7", price:2000, imageUrl:'s7.jpg', description:'Samsung Galaxy S7 (32GB)',category: 'Telefon' },
            { id:4, name:"Samsung S8", price:2500, imageUrl:'s8.jpg', description:'Samsung Galaxy S8 (32GB)',category: 'Telefon' },
            { id:5, name:"Samsung S9", price:3000, imageUrl:'s9.jpg', description:'Samsung Galaxy S9 (64GB)',category: 'Telefon' },
            { id:6, name:"Samsung S10", price:3500, imageUrl:'s10.jpg', description:'Samsung Galaxy S10 (128GB)',category: 'Komputer' },
            { id:7, name:"Samsung S11", price:4000, imageUrl:'s11.jpg', description:'Samsung Galaxy S11 (128GB)',category: 'Komputer' },

        ],
        categories:[
            { id:1, name:"Telefon" },
            { id:2, name:"Komputer"},
            { id:3, name:"Aksesuar"}
        ],
        orders:[]
    }
}