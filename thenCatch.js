const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        const dataDay =['senin','selasa','rabu','kamis','jumat'];
        let cek = dataDay.find((item)=>{
            return item === day
        })
        if(cek){
            resolve(cek);
        }else{
            reject(new Error('Hari ini bukan hari kerja'));
        }
    },3000)
}

//THEN CATCH
cekHariKerja('rabu')
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
//then catch merupakan method yang digunakan untuk menghandle output dari promise 
//jika resolve->Fullfilled masuk ke .then
//jika reject masuk ke .catch


//TRY CATCH
async function cekHari(x) {
    try {
      let result = await cekHariKerja(x);
      await showDay(result);
    } catch (error) {
      console.log(error);
    }
}
//try catch untuk digunakan menghandle error di async/await

function showDay(result) {
    return console.log(result);
}

cekHari('rabu');