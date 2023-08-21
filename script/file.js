
function findMatch() {
    const couponCode = document.getElementById('coupon-code'); 
    const inputField = document.getElementById('coupon-field');
    const button = document.getElementById('coupon-apply');

    const code = couponCode.innerText;
    const inputValue = inputField.value;


    if (code === inputValue && total > 200) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', 'true');
    }

}

document.getElementById('coupon-field').addEventListener('input', findMatch);




let total = 0;
function addToCart(target) {
    const itemContainer = document.getElementById('items')
    const itemsTitle = target.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('p');
    li.innerText = itemsTitle;
    itemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total + 'Tk';

    // setDiscount(total);
   return total;
}


function setDiscount(){
   const discountPercent = 20;
   const discountAmount = discountPercent / 100 * total;
   const totalDiscountPrice = total - discountAmount;

   const discountField = document.getElementById('discount');
   discountField.innerText =  discountAmount.toFixed(2) + 'Tk';
  
   const totalElement = document.getElementById('all-Total');
   totalElement.innerText = totalDiscountPrice + 'Tk';

   const purchaseButton = document.getElementById('purchase-button');

   if( total > 0){
    purchaseButton.removeAttribute('disabled');
   }
};

document.getElementById('go_home').addEventListener('click', function(){
    location.reload();
})


