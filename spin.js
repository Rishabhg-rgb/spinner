let number = Math.ceil(Math.random()*1000)
let spinner = document.getElementById('spinner')
let spa =  document.querySelector('.spa')
let spb = document.querySelector('.spb')
let spc = document.querySelector('.spc')
let spd = document.querySelector('.spd')
let randomNum
let seniorName
let seniorPhone
spinner.addEventListener('click',async()=>{
    seniorName = document.querySelector('#name').value
    seniorPhone = document.querySelector('#phone').value
    {!seniorName?alert("Seniors kindly enter your name and then spin."):
    random()
    for (let i = 0; i < 5; i++) {
        spa.style.backgroundColor = "black"
        setTimeout(() => {  
            spb.style.backgroundColor = "black"
            spa.style.backgroundColor = "red"
        }, 100);
        
        
        setTimeout(() => {  
            spd.style.backgroundColor = "black"
            spb.style.backgroundColor = "skyblue"
        }, 200);
        setTimeout(() => {  
            spc.style.backgroundColor = "black"
            spd.style.backgroundColor = "green"
        }, 300);
        setTimeout(() => {  
            spa.style.backgroundColor = "black"
            spc.style.backgroundColor = "yellow"
        }, 400);
        await sleep(400)

    }
    if(randomNum==1){
        spa.style.backgroundColor="black"

    }
    if(randomNum==2 || randomNum==0){
        spb.style.backgroundColor="black"
        spa.style.backgroundColor="red"
    }
    if(randomNum==3){
        spc.style.backgroundColor="black"
        spa.style.backgroundColor="red"
    }
}

if (seniorName) {
    var templateParams = {
        name: seniorName,
        phone: seniorPhone,
        randomNum:randomNum
    };
    
    (function(){
        emailjs.init("V2sOt4QMzp7ARvsNA");
     })();
     emailjs.send('service_r8ukkak', 'template_e0kgnua', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
    
}




})


let i = 0
function sleep(ms) {
    return new Promise((accept)=>{
        setTimeout(()=>{
        accept()
    },ms)
    })
}
function random(){
    randomNum = Math.floor(Math.random()*4)
}


