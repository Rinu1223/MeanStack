//BinarySeary.js
var arr=[7,3,6,2,8,1]
var element=8;
//step 1 sorting
arr.sort((i,j)=>i-j)//asc order(compair i and j,i come first )
//arr.sort((i,j)=>j-i)//asc order(compair i and j,j come first)

//console.log(arr);
//1 2 3 4 5 6 7 8
//0 1 2 3 4 5 6 7
//l             u
//mid  position
//mid =(l+u)/2=math.floor((l+u)/2)    //0+5/2=2.5=2
// if element >arr[mid]   8>arr[2]  8>3
//low=mid +1
//mid=l+u/2   5+5/2=10/2=5
//8>8

// step 2 low and upper

var low=0,upp=arr.length-1,flag=0;
while(low<=upp)
{
    let mid=Math.floor((low+upp)/2);//mid=0+5=2
    
    if(element>arr[mid]){//2>3
        low=mid+1;

    }
    else if(element<arr[mid]) {//2<3
        upp=mid-1;

    }
    else if(element==arr[mid]){
        flag=1;
        break;
    }
    
}


if(flag>0){
    console.log(`${element} found`);
}
else
{
    console.log(`${element} not found`);
}
//BinarySeary.js