  
"use strict";

const allCategories = document.querySelectorAll ('.item');
console.log(`В списке ${allCategories.length} категории.`)

allCategories.forEach((category) => 
{const nameCategory = category.querySelector('h2');
 const quantityCategory = category.querySelectorAll('li').length;

  console.log(`Категория: ${nameCategory.textContent}`)
  console.log(`Количество элементов: ${quantityCategory}`);
});

