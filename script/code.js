let array = [true,true,false,true,false,true,true,true,false,true,false,true,true,false,true];


document.querySelector('#array1').innerHTML = array;
document.querySelector('#array2').innerHTML = array.filter(Boolean).length;
;