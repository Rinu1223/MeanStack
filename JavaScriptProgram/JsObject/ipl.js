var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:2},
    {team_name:"kkr",mp:2,won:1,los:1,pts:1},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0},

]

//print name
for(let state of ipl)
{
  //  console.log(state.team_name);
}
//print rcb data
for(let rcb_details of ipl){
    
    
    if(rcb_details.team_name=="rcb"){
      //  console.log(rcb_details);
    }
}
//print highest point
for(let key of ipl)
{
    
    var srt=[key.pts].sort((i,j)=>i-j)
   console.log(srt);
}
    

