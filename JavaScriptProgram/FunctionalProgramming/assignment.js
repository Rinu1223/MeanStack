var text=[
    {distname:"tvm",temp:25},
    {distname:"ekm",temp:26},
    {distname:"tsr",temp:27},
    {distname:"apy",temp:22},
    {distname:"ktm",temp:27},
    {distname:"pkd",temp:30},
    {distname:"knr",temp:28},
    
    {distname:"tvm",temp:24},
    {distname:"ekm",temp:25},
    {distname:"tsr",temp:29},
    {distname:"apy",temp:25},
    {distname:"ktm",temp:26},
    {distname:"pkd",temp:25},
    {distname:"knr",temp:28}
    ]
    var result={}
    for(var data of text){
       if(data.distname in result)
       {
           
       }
       else{
           result[data["distname"]]=data["temp"]
       }
        
    }
   console.log(result);