const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = [`Steak- $35`, `Pasta- $25`, `Burger- $15`, `Salmon- $45`]; 
const dessertMenu = [`Cake- $7 `, `Icre Cream- $5`, `Pudding- $5`, `Fruit Salad- $8`]; 





 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 const mainCourseMenuItemsHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('mainCourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

 const dessertMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;


//  let mainCourseItem = '';
// mainCourseMenu.forEach((item, index) => {
// mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
// document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// let dessertItem = '';
// for (let i = 0; i < dessertMenu.length; i++) {
//     dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
// document.getElementById('dessertMenuItems').innerHTML = dessertItem;