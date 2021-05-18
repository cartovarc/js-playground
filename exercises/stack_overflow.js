// With setTimeout, each removeItemsFromLIst execution and prevent stack overflow
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        setTimeout(() => {
            removeItemsFromList();
        }, 0);
    }
};
 
removeItemsFromList();
console.log(list);