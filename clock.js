const hrs = document.querySelector('#hrs');
    const min = document.querySelector('#min');
    const second = document.querySelector('#second');

   

     setInterval(()=>{
        const time = new Date();

        hrs.innerHTML =(time.getHours()<10?"0":"") + time.getHours() ;
        min.innerHTML =(time.getMinutes()<10?"0":"") + time.getMinutes() ;
        second.innerHTML =(time.getSeconds()<10?"0":"") + time.getSeconds() ;
     },1000);
