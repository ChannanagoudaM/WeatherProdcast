let search=document.getElementById("search");
async function hlo(search)
{
    let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=86a04cd384184598b9934ea617dfdaa2&units=metric`);
        result=await result.json();
        let city=document.getElementById("city");
        city.innerHTML=result.name;
        let temp=document.getElementById("temp");
        temp.innerHTML=result.main.temp;
        let wind=document.getElementById("wind");
        wind.innerHTML=result.wind.speed;
        let cloud=document.getElementById("humidity");
        cloud.innerHTML=result.clouds.all;
        console.log(result.clouds.all);
        if(result.main.temp>34)
        {
           let para=document.getElementById("para");
           para.innerHTML='"I think you need sunscreen...."';
        }
       if(result.main.temp>=20 && result.main.temp<=35)
       {
        para.innerHTML='"Great weather to go out...."';
       }
       if(result.clouds.all>=50 && result.clouds.all<=70)
       {
        let para1=document.getElementById("para1");
        para1.innerHTML='"There may be chances of some drizzle...."';
       }
       if(result.clouds.all>=71 && result.clouds.all<=100)
       {
        para1.innerHTML='"You need UMBRELLA....'
       }
}

let button=document.getElementById("submit");
button.addEventListener("click",()=>
{
    hlo(search.value);
})