var arr = [1,2,8,9,12,46,76,82,15,20,30]
var count = 0;
var str ="";
for(i=1;i<=9;i++){
    count = 0;
    for(let item of arr){
        if (item%i==0){
            count++;
        }
    }
    str+=i+":"+count+","
}
console.log("{"+str+"}");
