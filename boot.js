document.getElementById('form').addEventListener('submit',
  function funsave(event){
    console.log(event.target)
    event.preventDefault();
    let expenseamount=document.getElementById('expenseid').value;
    let description=document.getElementById('descriptionid').value;
    let category=document.getElementById('choose').value;
     
   const details = {
      expenseamount : expenseamount,
      description : description,
      category : category
  }
       
    const fulldetails=JSON.parse(localStorage.getItem(details))??[];
    console.log(fulldetails)
    fulldetails.push(details);
    localStorage.setItem(details.description,JSON.stringify(details))
    event.target.reset()
    showExpenseOnScreen(details);
});

window.addEventListener('DOMContentLoaded',(event)=>{
  Object.keys(localStorage).forEach(key =>{
      const userDetails = JSON.parse(localStorage.getItem(key))
      showExpenseOnScreen(userDetails)
  })
})


 function showExpenseOnScreen(fulldetails){
const parentNode = document.getElementById('liid');
const childElement = `<li id='${fulldetails.description}'>Rs. ${fulldetails.expenseamount} - ${fulldetails.description} - ${fulldetails.category}
<button onclick=deleteUser('${fulldetails.description}')>Delete</button>
</li>`
parentNode.innerHTML +=  childElement;
}

function deleteUser(description) {
  localStorage.removeItem(description)
  removeItemFromScreen(description)
}

function removeItemFromScreen(description){
  const parentNode = document.getElementById('liid');
  const elem = document.getElementById(description)
  parentNode.removeChild(elem);
}

