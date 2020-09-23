"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ulList = document.getElementById("ingredients");
  const elements = ingredients.map(ingredient => {
    const items = document.createElement('li');
    items.innerHTML = ingredient;
    return items;
  })
  console.log(elements);
  ulList.append(...elements);


  