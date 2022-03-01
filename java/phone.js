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
document.getElementById('cards-container').textContent='';
for(const phone of phons){
    //  console.log(phone);
    const div = document.createElement('div');
    div.classList.add('allcards-container');
    div.innerHTML=`
    
    <div class="card">
    <div class="banner">
      <img src="${phone.image}" alt="" />
    </div>
    
    <div class="phone-details">
      <h4>Name:${phone.phone_name}</h4>
      <h4>Brand Name:${phone.brand}</h4>
      
      <button onclick="phonedetails('${phone.slug}')" class="btn2">Details</button>
    </div>
    </div>
    
    `
    parantcontainer.appendChild(div);
}

}

const phonedetails=phoneid=>{
// console.log(phoneid)
const url = `https://openapi.programming-hero.com/api/phone/${phoneid}`
fetch(url)
.then(res=>res.json())
.then(data=>showdetails(data.data))

}

const showdetails=(details)=>{
  console.log(details);
     const parantcontainer=document.getElementById('detail-container');
     document.getElementById('detail-container').textContent='';
    
        const div=document.createElement('div');
        div.innerHTML=`
        
        <div id="card2" class="card">
        <div class="banner">
          <img src="${details.image}" alt="" />
        </div>
        
        <div class="phone-details">
          <h4>Name:</h4><h3>${details.name}</h3>
          <h4>Release Date:</h4><h3>${details.releaseDate}</h3>
          
          <h4>MainFeatures-</h4>
          <h4>Storage:</h4>
          <h3>${details.mainFeatures.storage}</h3>
          <h4>DisplaySize:</h4><h3>${details.mainFeatures.displaySize}</h3>
          <h4>chipSet: </h4><h3>${details.mainFeatures.chipSet}</h3>
          
          <h4>Memory:</h4> <h3>${details.mainFeatures.memory}</h3>
          
        </div>
        </div>
        `

        parantcontainer.appendChild(div);
    
}