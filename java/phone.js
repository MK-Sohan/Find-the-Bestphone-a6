const errormessage=document.getElementById('error-message');





const searchphone=()=>{
  document.getElementById('cards-container').textContent='';
  errormessage.innerText='';
    const inputbox = document.getElementById('input-box').value;
    document.getElementById('input-box').value='';
    if(inputbox==''){
      errormessage.innerText='Enter a phone name'
    }
    else{
      const url = `
      https://openapi.programming-hero.com/api/phones?search=${inputbox}
  
      `
     
      fetch(url)
      .then(res=>res.json())
      .then(data=>searchresult(data.data))
    }
    
   
}

 const searchresult=phons=>{
    //  console.log(phons);
    
    const phonsslice = phons.slice(0,20);
    if(phonsslice.length==0){
errormessage.innerText='No phone found'
    }
    else{
      const parantcontainer =document.getElementById('cards-container');
      document.getElementById('cards-container').textContent='';


      for(const phone of phonsslice){
        //  console.log(phonsslice);
        
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
   const [FaceID,accelerometer,gyro,proximity,compass,barometer]=details.mainFeatures.sensors
         
   console.log(FaceID,accelerometer,gyro,proximity,compass,barometer);


     const parantcontainer=document.getElementById('detail-container');
     document.getElementById('detail-container').textContent='';
    
        const div=document.createElement('div');
        div.innerHTML=`
        
        <div id="card2" class="cardd">
        <div class="banner">
          <img src="${details.image}" alt="" />
        </div>
        
        <div class="phone-details">
          <h4>Name:</h4><h3>${details.name}</h3>
          <h4>Release Date:</h4><h3>${details.releaseDate}</h3>
          <h4>Sensors:</h4><h3>${'Fingerprint'},
          ${'optical'},
          ${'accelerometer'},
          ${'gyro'},${'proximity'},
          ${'compass '},
          ${'color spectrum'}</h3>
          <h4>MainFeatures-</h4>
          <h4>Storage:</h4>
          <h3>${details.mainFeatures.storage}</h3>
          <h4>DisplaySize:</h4><h3>${details.mainFeatures.displaySize}</h3>
          <h4>chipSet: </h4><h3>${details.mainFeatures.chipSet}</h3>
          
          <h4>Memory:</h4> <h3>${details.mainFeatures.memory}</h3>
          <h4>Others:-</h4>
          <h3>WLAN:${details.others.WLAN}</h3>
          <h3>Bluetooth:${details.others.Bluetooth}</h3>
          <h3>GPS:${details.others.GPS}</h3>
        </div>
        </div>
        `

        parantcontainer.appendChild(div);
    
}