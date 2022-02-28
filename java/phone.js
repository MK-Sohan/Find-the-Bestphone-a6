const searchphone=()=>{
    const inputbox = document.getElementById('input-box').value;
    document.getElementById('input-box').value='';
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${inputbox}

    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchresult(data.data))
}

 const searchresult=phons=>{
    //  console.log(phons);
const parantcontainer =document.getElementById('cards-container');
for(const phone of phons){
    console.log(phone);
    const div = document.createElement('div');
    div.innerHTML=`
    
    <div class="card">
    <div class="banner">
      <img src="${phone.image}" alt="" />
    </div>
    
    <div class="phone-details">
      <h4>Name:</h4>
      <h4>Release Date:</h4>
      <h4>Sensore:</h4>
      <h4>Others:</h4>
      <button class="btn2">Details</button>
    </div>
    </div>
    
    `
    parantcontainer.appendChild(div);
}

}