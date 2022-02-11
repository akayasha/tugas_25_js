var x =[2,39,76,50,9,7,41,2,24,1,16];
console.log("Sebelumnya : ", x);

asc = x.sort();
console.log("Asscending : ",asc);

desc = x.reverse();
console.log("Desscending : ",desc);

  fil = x.filter( x => {
    return x > 10;
  })

console.log("Filter > 10 ",fil);
