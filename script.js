let firstLine = document.getElementById("L1"),
secondLine = document.getElementById("L2"),
des = document.getElementById("des");

function apiCall(){
    let kuralNo = Math.floor(Math.random()*1331);
    let url = fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNo}?appid=8b6craw90resh&format=json`);
    let data = url.then((z)=>z.json());
    data.then((kural)=>{
        console.log(kural);
        firstLine.innerText = kural.line1;
        secondLine.innerText = kural.line2;
        des.innerText = kural.urai2;
    }).catch((err)=>{
        console.log(err);
    })
};

apiCall();