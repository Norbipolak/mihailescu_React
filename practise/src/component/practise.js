import axios from "axios";

const fetchData = ()=> {
    return axios.get("https://randomuser.me/api/?results=20")
.then((res)=> {
    console.log(res);
}).catch((err)=> {
    console.log(err);
})
}
/*
fontos itt, hogy a then is egy callback-et vár meg a catch is egy callback-et vár!!! 
then vár egy res-et és a catch meg egy err és attól függően, hogy van-e hiba ha van akkor a catch az elkapja a hibát és majd ezt kiírjuk!!! 
*/

useEffect(()=> {
    fetchData();
}, [])

/*
most amit visszakaptunk abba van egy location objektum és annak a key-eiből meg értékeiből csinálunk egy table-t, úgyhogy a key-ek lesznek a 
a legfelső sor, az értékek meg alatta de viszont itt a location objektumon belül vannak tömbök meg újra objektumok és az a feladat, hogy ezt 
flat-eljük!!!  
*/


function Practise() {
    return(
        <div></div>
    )
}

export default Practise;