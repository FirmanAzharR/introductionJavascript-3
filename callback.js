const getmounth = (callback) =>{
    setTimeout(()=>{
        let error = false;
        let mounth = ['January','February','March','April','May','Juni','July',
        'August','September','Oktober','November','December'];
        if(!error){
            callback(null,mounth);
        }else{
            callback(new Error('Sorry Data Not Found',[]));
        }
    })
}

const showmounth = (x,y) => {
    return new Promise((resolve,reject)=>{
        x===null ? resolve(`${y.map(x=>x)}`) : reject(x)
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}

getmounth(showmounth)

/*getmounth(showmounth);
const showmounth = (x,y) => {
   if(x===null){
       y.map(x=> console.log(x));
   }else{
       console.log(x,y);
   }
}*/