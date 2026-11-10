fetch('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching products:', error));


  