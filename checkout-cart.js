        //   check out-validation
      function validation(){
        if(document.getElementById('first').value===''){
      
          document.getElementById('error').innerHTML='first name is required !'
        }
        else if(document.getElementById('last').value===''){
          document.getElementById('error').innerHTML='last name is  required !'
        }
        else if(document.getElementById('company').value===''){
            document.getElementById('error').innerHTML='company name is required !'
          }
          else if(document.getElementById('select').value===''){
            document.getElementById('error').innerHTML='country or region is required !'
          }
        else if(document.getElementById('address').value===''){
          document.getElementById('error').innerHTML='address is required !'
        }
        else if(document.getElementById('postcode').value===''){
            document.getElementById('error').innerHTML='postal code is required !'
          }
          else if(document.getElementById('town').value===''){
            document.getElementById('error').innerHTML='town name is required !'
          }
          else if(document.getElementById('phone').value===''){
            document.getElementById('error').innerHTML='phone number is required !'
          }
          else if(document.getElementById('Email').value===''){
            document.getElementById('error').innerHTML='email is required !'
          }
          else if(document.getElementById('order').value===''){
            document.getElementById('error').innerHTML='order-notes required !'
          }
       
      
      else{
          document.getElementById('form-validation').submit()
      }
      
      
      }
      
      
    //   cart-validation
      function updateSubtotal(productId) {
    const quantity = parseInt(document.getElementById(productId).getElementsByClassName('cart-value')[0].value);
    const price = parseFloat(document.getElementById(productId).getElementsByClassName('price')[0].getAttribute('data-price'));
    const subtotalElement = document.getElementById(productId).getElementsByClassName('subtotal')[0];
    const subtotal = quantity * price;
    subtotalElement.textContent = subtotal.toFixed(2);
    updateTotal();
  }

  function updateTotal() {
    const subtotals = document.querySelectorAll('.subtotal');
    let total = 0;
    subtotals.forEach(subtotal => {
      total += parseFloat(subtotal.textContent);
    });

    // Update Subtotal and Total in the cart
    document.getElementById('subtotal').textContent = total.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
  }



  // subscribtion


  function subscribe() {
    var email = document.getElementById('email').value;

    if (validateEmail(email)) {
        
        var subscribeButton = document.getElementById('subscribeButton');
        subscribeButton.innerHTML = 'Subscribed';
        subscribeButton.classList.add('subscribed');
        subscribeButton.disabled = true;
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
