getIpAddress();
    function getIpAddress(){
        fetch(`https://jsonip.com/`).then(res=>{
            return res.json();
        }).then(data=>{
            getInfo(data.ip)
        }).catch(err=>{
            console.log(`catch error ${err}`)

        })
    }

 function getInfo(ip){
     let ipAddress = ip;
      fetch(`https://ip-api.com/json/${ipAddress}`).then(res=>{
      return res.json();
     }).then(data=>{
        console.log(data);
        document.getElementById('IP_Address').innerHTML=data.query;
        document.getElementById('Latitude').innerHTML=data.lat;
        document.getElementById('City').innerHTML=data.city;
        document.getElementById('Organisation').innerHTML=data.org;
        document.getElementById('Longitute').innerHTML=data.lon;
        document.getElementById('Region').innerHTML=data.region;
        document.getElementById('Hostname').innerHTML=data.as;
        document.getElementById('TimeZone').innerHTML=data.timezone;
        document.getElementById('zipcode').innerHTML=data.zip;

     }).catch(err=>{
         console.log(`catch error ${err}`)
     })
    }
 
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let todayDate = newDate.getDate();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    document.getElementById('txt').innerHTML = " " + todayDate + "/ " + month + "/ " + year +" Time :- "+hours + ": " + minutes + ": " + seconds;

 

 fetch('https://api.postalpincode.in/pincode/400070').then((data)=>{
    return data.json();
}).then((completedata)=>{
    console.log(completedata);
    document.getElementById('message').innerHTML=completedata[0].Message;
    document.getElementById('Name').innerHTML=completedata[0].PostOffice[0].Name;
    document.getElementById('BranchType').innerHTML=completedata[0].PostOffice[0].BranchType;
    document.getElementById('DeliveryStatus').innerHTML=completedata[0].PostOffice[0].DeliveryStatus;
    document.getElementById('District').innerHTML=completedata[0].PostOffice[0].District;
    document.getElementById('Division').innerHTML=completedata[0].PostOffice[0].Division;

    document.getElementById('Name2').innerHTML=completedata[0].PostOffice[1].Name;
    document.getElementById('BranchType2').innerHTML=completedata[0].PostOffice[1].BranchType;
    document.getElementById('DeliveryStatus2').innerHTML=completedata[0].PostOffice[1].DeliveryStatus;
    document.getElementById('District2').innerHTML=completedata[0].PostOffice[1].District;
    document.getElementById('Division2').innerHTML=completedata[0].PostOffice[1].Division;
    
    document.getElementById('Name3').innerHTML=completedata[0].PostOffice[2].Name;
    document.getElementById('BranchType3').innerHTML=completedata[0].PostOffice[2].BranchType;
    document.getElementById('DeliveryStatus3').innerHTML=completedata[0].PostOffice[2].DeliveryStatus;
    document.getElementById('District3').innerHTML=completedata[0].PostOffice[2].District;
    document.getElementById('Division3').innerHTML=completedata[0].PostOffice[2].Division;
   
});














