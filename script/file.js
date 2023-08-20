
    function findMatch() {
        const couponCode = document.getElementById('coupon-code'); // Replace with your actual selector
        const inputField = document.getElementById('coupon-field');
        const button = document.getElementById('coupon-apply');
    
        const code = couponCode.innerText;
        const inputValue = inputField.value;
     
        
        if (code === inputValue) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'true');
        }
     
    }
    
    document.getElementById('coupon-field').addEventListener('input', findMatch);

    function handleClick(target){
        console.log(target.parentNode);
    }
    