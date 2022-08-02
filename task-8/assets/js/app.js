if(localStorage.getItem('basket')==null){
    localStorage.setItem('basket',JSON.stringify([]))
}

let buttons=document.querySelectorAll('.btn')


for(var btn of buttons){
    btn.addEventListener('click',function(e){
         e.preventDefault();
         let basket=JSON.parse(localStorage.getItem('basket'));
         let prodact_id=e.target.parentElement.parentElement.parentElement.id;
         let prodact_img=e.target.parentElement.previousElementSibling.src;
         let prodact_name=e.target.previousElementSibling.previousElementSibling.innerHTML;
         let prodact_price=e.target.previousElementSibling.innerHTML;
         
         let existProdact=basket.find(prodact=>prodact.id===prodact_id)
         
         if(existProdact===undefined){

             basket.push({
                id:prodact_id,
                name:prodact_name,
                img:prodact_img,
                price:prodact_price,
                count:1
             })
         }

         else{
            existProdact.count++;
         }
        
         localStorage.setItem('basket',JSON.stringify(basket))
         showProdactCount()
    })
}

//---Prodact Count--
function showProdactCount(){
    var prodact_count=JSON.parse(localStorage.getItem('basket'))
    document.querySelector('#prodact-count').innerHTML=prodact_count.length
}
showProdactCount()