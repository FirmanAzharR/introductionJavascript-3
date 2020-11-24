//cek jam kerja
const cekJamKerja = (time) =>{
    return new Promise ((resolve,reject)=>{

        let hoursMinutes = time.split(/[.:]/);
        let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        let jam = hours + minutes / 60;

        jam>=8 && jam<=16 ?  resolve(time) : reject(new Error(`pukul ${time} bukan jam kerja`));
        
    })
}

cekJamKerja('12.59')
.then((result)=>{
    console.log(
        `pukul ${result} adalah jam kerja`
    );
})
.catch((error)=>{
    console.log(error);
})

//================================================================================================================

//Cek Vitamin dalam buah
const cekVitamin = (buah) =>{
    return new Promise((resolve, reject)=>{
        const dataBuah =[
            { nama: 'Apel', vitamin: 'A,C'},
            { nama: 'Jeruk', vitamin: 'C'}
        ];
        let cek = dataBuah.filter(
            x => x.nama.toLowerCase() === buah.toLowerCase()
        );
        if(cek.length>0){
            resolve(cek);
        }else{
            reject(new Error('Buah tidak terdaftar dalam list'));
        }
    })
}

cekVitamin('apel')
.then((result)=>{
    //console.log(result);
    result.map(x=>console.log(`Buah ${x.nama} mengandung vitamin ${x.vitamin}`))
})
.catch((error)=>{
    console.log(error);
})

//===============================================================================================================


