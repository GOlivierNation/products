const products = [

{

imgsrc: 'clock.png',

price: '1$',

description: 'Clock',

quantity: 10,

},

{

imgsrc: 'clock.png',

price: '1$',
    
description: 'Tree',
    
quantity: 10,

},


];


     const table = document.getElementById("testBody");
     products.forEach(product => {
     const tr =  document.createElement("tr");

     const imgtd = document.createElement("td");
     const img = document.createElement('img');
     img.src = product.imgsrc;

     const tdPrice = document.createElement("td");
     tdPrice.innerHTML = product.price;

     const tdDescription = document.createElement("td");
     tdDescription.innerHTML = product.description;

     
     const tdQuantity = document.createElement("td");
     tdQuantity.innerHTML = product.quantity;

     
     imgtd.appendChild(img);
     tr.appendChild(imgtd);
     tr.appendChild(tdPrice);
     tr.appendChild(tdDescription);
     tr.appendChild(tdQuantity);
     table.appendChild(tr);

      });

      console.log("Table displayed");
