//cek jam kerja
const cekJamKerja = (time) =>{
    return new Promise ((resolve,reject)=>{
        if(typeof(time)=='string'){
            let hoursMinutes = time.split(/[.:]/);
            let hours = parseInt(hoursMinutes[0], 10);
            let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
            let jam = hours + minutes / 60;
            jam>=8 && jam<=16 ?  resolve(`pukul ${time} adalah jam kerja`) : reject(new Error(`pukul ${time} bukan jam kerja (contoh input 11:30)`));
        }else{
            reject('input harus string');    
        }
        
    })
}

cekJamKerja('11:30')
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

//================================================================================================================

//Cek Vitamin dalam buah
const cekBuah = (buah) =>{
    return new Promise((resolve, reject)=>{
        const dataBuah =[
            { nama: 'Apel', vitamin: 'A,B1,B2,C'},
            { nama: 'Jeruk', vitamin: 'A,B1,B2,C'},
            { nama: 'Pisang', vitamin: 'A,B1,B2'},
            { nama: 'Mangga', vitamin: 'A,E,C'},
            { nama: 'Tomat', vitamin: 'A,B1,C'},
        ];
        if(typeof(buah)=='string'){
            let cek = dataBuah.filter(
                x => x.nama.toLowerCase() === buah.toLowerCase()
                );
            if(cek.length>0){
                resolve(
                    cek//.map(x=>console.log(`Buah ${x.nama} mengandung vitamin ${x.vitamin}`))
                );
            }else{
                reject(new Error('Buah tidak terdaftar dalam list'));
            }
        }else{
            reject('Inputan harus string');
        }
    })
}
        
cekBuah('mangga')
.then((result)=>{
    //result;
    result.map(x=>console.log(`Buah ${x.nama} mengandung vitamin ${x.vitamin}`))
})
.catch((error)=>{
    console.log(error);
})
        
//===============================================================================================================
        
        
        
