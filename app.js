function addItem(event)
{
    event.preventDefault();
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    
    let myObj = {name,description,price,quantity};

    //add item
    axios.post("https://crudcrud.com/api/17cb4ae2a0a1485db422631385fcee6f/retailData", myObj)
    .then((reponse => {
        showOnScreen(reponse.data)
        console.log(reponse);
    }))
    .catch((err) =>
    {
        document.body.innerHTML = document.body.innerHTML + '<h4> Something went wrong </h4>';
        console.log(err);
    })
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/17cb4ae2a0a1485db422631385fcee6f/retailData")
    .then((response) => {
        for(var i=0;i<response.data.length; i++){
            showOnScreen(response.data[i]);
        }   
    })
    .catch((err) => {
        console.log(err)
    })
})
function showOnScreen(myObj)
{
   
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.textContent =  "Name = " + myObj.name + " Description = " + myObj.description + " Price = " + myObj.price + " Quantity = " + myObj.quantity;
    li.style.fontWeight = 'bold'
    ul.append(li);
    //button one
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'Buy One'
    btn.addEventListener("click", function(e){
                       const newQuant = myObj.quantity - 1;
                       axios.put(`https://crudcrud.com/api/17cb4ae2a0a1485db422631385fcee6f/retailData/${myObj._id}`,{
                            name: myObj.name,
                            description: myObj.description,
                            price: myObj.price,
                             quantity: newQuant
                         })
                        .then((response) => {
                           window.location.reload()
                           console.log(response.data)
                      })
                
    });
    li.append(" ",btn)
    //button two
    var btnTwo = document.createElement('button');
    btnTwo.className = 'btn btn-success btn=sm edit'
    btnTwo.textContent = 'Buy Two'
    btnTwo.style.borderRadius = '5 px'
    btnTwo.addEventListener("click", function(e){
        const newQuant = myObj.quantity - 2;
        axios.put(`https://crudcrud.com/api/17cb4ae2a0a1485db422631385fcee6f/retailData/${myObj._id}`,{
             name: myObj.name,
             description: myObj.description,
             price: myObj.price,
              quantity: newQuant
          })
         .then((response) => {
            window.location.reload()
            console.log(response.data)
       })
 
});

    li.append(" ",btnTwo)
    //button three
    var btnThree = document.createElement('button');
    btnThree.className = 'btn btn-success btn=sm edit'
    btnThree.textContent = 'Buy Three'
    btnThree.style.borderRadius = '5 px'
    btnThree.addEventListener("click", function(e){
        const newQuant = myObj.quantity - 3;
        axios.put(`https://crudcrud.com/api/17cb4ae2a0a1485db422631385fcee6f/retailData/${myObj._id}`,{
             name: myObj.name,
             description: myObj.description,
             price: myObj.price,
              quantity: newQuant
          })
         .then((response) => {
            window.location.reload()
            console.log(response.data)
       })
 
});
    li.append(" ",btnThree)
    
    

}

