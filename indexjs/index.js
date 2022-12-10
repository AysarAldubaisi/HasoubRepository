
alert('hello')
function order(arr){
    let result 

    result = false;
    
    for (let i =1;i<arr.length; i++){
        console.log('i = ' +i);
    for (let j=i+1;j <arr.length ;j++){
        if(arr[i]>arr[j]){
            temp = arr[i];
            arr[i]= arr[j];
            arr[j]= temp;
            result= true;
           
        }
    }
}

return arr;
}

let test =[2,5,3,7,4];
console.log(test);
console.log(order(test));
