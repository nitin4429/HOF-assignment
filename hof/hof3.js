let items = [
    {
    item:"car",
    price:200,
},
    {
    item:"bike",
    price:100,
},
    {
    item:"pencil",
    price:10,
},
];
const exchangerate = 80;
function convertIntoRupee(priceUSD){
    return priceUSD*exchangerate;
}
const priceINR = items.map((item) =>({
    ...item,
    priceinINR: convertIntoRupee(item.price)
}));
console.log(priceINR);
