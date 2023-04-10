const numberArrays = [2, 4, 6, 8, 10, 12];
const lastElement = numberArrays.pop();
numberArrays.unshift(lastElement);
console.log(numberArrays)
const products = [
    { productTitle: 'Product 1', productPrice: 10 },
    { productTitle: 'Product 2', productPrice: 20 },
    { productTitle: 'Product 3', productPrice: 30 }
  ];
  
console.log(products);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const mean = sum / numbers.length;
console.log(mean);
const phone = {
    phoneName: 'iPhone 13',
    phoneDescription: 'The latest iPhone model',
    phonePrice: 999,
    shopAddresses: ['123 Main St', '456 Elm St', '789 Oak St'],
    phoneMemoryInGB: 128
  };
  
console.log(phone);
console.log(`Phone name is ${phone.phoneName}, phone price is ${phone.phonePrice} and you can buy it at ${phone.shopAddresses[0]}`);