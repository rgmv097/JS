

function SendRequest(){
    fetch('p324.json')
    .then(response=>response.json())
    .then(data=>{
        let item=""
        data.forEach(x=>{
            item+=`
            <div class="col-lg-4">
            <div class="card my-4" >
                <img src="${x.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${x.name}</h5>
                    <p class="card-text">Age:${x.age}</p>
                    <p class="card-text">Position:${x.position}</p>                    
                    <p class="card-text">${x.description.length>50 ? x.description.slice(0,80)+'...':x.description}</p>
                    <a href="JavaScript:void(0);" class="btn btn-primary">Send a Friend Request</a>
                </div>
            </div>
           </div>
            
            
            `
        })
      
        document.getElementById('cart').innerHTML=item;

    })
    .catch(err=>console.log(err))
}