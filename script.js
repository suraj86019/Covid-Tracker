
 fetch('https://corona.lmao.ninja/v2/countries/india')
 //  fetch('https://api.covid19api.com/countries/'+ currentelement.value)
 /// fetch means its send request and respond to http server
 .then((response) => {
   return response.json();
 })
 .then((data) => {
   console.log(data);
   document.getElementById("country").innerHTML = data.country;
   document.getElementById("active").innerHTML = data.active.toLocaleString();
   document.getElementById("cases").innerHTML = data.cases.toLocaleString();
   document.getElementById("critical").innerHTML = data.critical.toLocaleString();
   document.getElementById("death").innerHTML = data.deaths.toLocaleString();
   document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
   document.getElementById("tests").innerHTML = data.tests.toLocaleString();
   document.getElementById("flag").src = data.countryInfo.flag;
 });
let searchbtn =document.getElementById('add_btn')
  searchbtn.addEventListener('click', callme)
  let   currentelement
  function callme(e){
      console.log(e);
      let currentbody= e.currentTarget;
      console.log(currentbody)
         currentelement = currentbody.previousElementSibling
       console.log(currentelement.value)

//        let p='https://corona.lmao.ninja/v2/countries/'
//    p=p+currentelement.value
//    fetch(p)
    fetch('https://corona.lmao.ninja/v2/countries/'+ currentelement.value)
//  fetch('https://api.covid19api.com/countries/'+ currentelement.value)
/// fetch means its send request and respond to http server
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("active").innerHTML = data.active.toLocaleString();
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical").innerHTML = data.critical.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
});

  }
  
