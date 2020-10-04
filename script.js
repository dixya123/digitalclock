function updateTime(){
    const mydate=new Date();
    let dname= mydate.getDay(),
     mon =mydate.getMonth(),
     dnum = mydate.getDate(),
     yr= mydate.getFullYear(),
     hr=mydate.getHours(),
     min=mydate.getMinutes(),
     sec=mydate.getSeconds(),
     pe="AM";
      if(hr==0){
          hr=12;
      }
      if(hr>12){
          hr=hr-12;
          pe="PM";
      }
      if(hr<10){
          hr="0"+hr;
      }
      if(min<10){
          min="0"+min;
      }
      if(sec<10){
          sec="0"+sec;
      }

     var months= ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var weeks=["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
     var ids=["dayname","month","daynum", "year","hour","minute","second","period"];
     var values=[weeks[dname],months[mon],dnum,yr,hr,min,sec,pe];
     for(var i=0;i<ids.length;i++){
         document.getElementById(ids[i]).firstChild.nodeValue=values[i];
     }



}
function initTime(){
    updateTime();
    window.setInterval("updateTime()",1);
}