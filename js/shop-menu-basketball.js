const menu = [
    {name: 'Wilson', price: 3500},
    {name: 'Spalding', price: 4620},
    {name: 'Molten', price: 5200},
    {name: 'Adidas', price: 5800},
    {name: 'Gucci', price: 10756},
    {name: 'Meteor', price: 4800}
  ];
  
  let total = 0;
  
  menu.forEach(item => {
    const button = document.createElement('button');
    button.textContent = `${item.name} - ${item.price} HUF`;
    button.addEventListener('click', () => {
      total += item.price;
      console.log(`Kosár tartalma: ${total} HUF`);
    });
    document.body.appendChild(button);
  });
  
  const checkoutButton = document.createElement('button');
  checkoutButton.textContent = 'Fizetés';
  checkoutButton.addEventListener('click', () => {
    console.log(`Fizetendő összeg: ${total} HUF`);
  });
  document.body.appendChild(checkoutButton);