const date = {};

date.nowDate = function(){
  const date = new Date().toLocaleDateString().split("/");
  
  return `${date[2]}-${+date[0]<10?"0"+date[0]:date[0]}-${+date[1]<10?"0"+date[1]:date[1]}`
}

date.nowTime = function (){
  const date = new Date()
  
  return `${+date.getHours() < 10?"0"+date.getHours():date.getHours()}:${+date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}`
}

date.getDay = function(date){
  const days = ["SUN", "MON", "TUE", " WED", "THU", "FRI", "SAT"]
  
  return days[new Date(date).getDay()]
} 

export default date;