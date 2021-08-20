const totalPrice = document.getElementById('total-price')
function imageChange(isChange) {
    const img = document.getElementById('art');
    const text = document.getElementById('text');
    const Price = document.getElementById('price'); 
    if (isChange == 1) {
        img.src = "1.jpg"
        text.innerText = 'Others have already pointed out how either can be correct depending on context However, I strongly discourage using “What this picture is about” and would instead opt for a simple colon. Really intensifies or places emphasis on the words beautiful.';
        Price.innerText = "500";
        totalPrice.innerText = "500";
    }
    else if (isChange == 2) {
        img.src = "2.jpg"
        text.innerText = "Let’s see the differences: the first example has 28 words, while the second has 18. Not only that, but the first is 2 sentences long whereas the second is just one. And the second allows your reading to flow uninterrupted, unlike the first.";
        Price.innerText = "650";
        totalPrice.innerText = "650";
    }
    else {
        img.src = "3.jpg"
        text.innerText = "In my way, I'd rather say- A painter is someone who never runs out of color. His colors are his silent notes, and when he pours them on his canvas, he depicts his silence, his thoughts and himself- raw and sour..";
        Price.innerText = "450";
        totalPrice.innerText ="450";
    }
}
const freeShipping = document.getElementById("shipping-price");
const total = document.getElementById("total-pric");
function updateTotal() {
    const shippingCharge = Number(freeShipping.innerText);
    const productPrice = Number(total.innerText);
    const ProductTotal = shippingCharge + productPrice;
    ProductTotal.innerText = total;
}
document.getElementById("n-shipping").addEventListener('click', function () {
    freeShipping.innerText= "10";
    updateTotal()
})
document.getElementById("e-shipping").addEventListener('click', function () {
    freeShipping.innerText= "30"
    updateTotal()
})
document.getElementById("first").addEventListener('click', function () {
    imageChange(1)

})
document.getElementById("second").addEventListener('click', function () {
    imageChange(2)

})
document.getElementById("third").addEventListener('click', function () {
    imageChange(3)
})