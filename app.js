

fetch('http://www.nokeynoshade.party/api/seasons/1/queens')
.then(function(result){
  return result.json();
}).then(function(jsonData){
  const getQueens = (jsonData[0].image_url);

  for ( let i = 0;  i < getQueens.length; i++){
    console.log(jsonData[i].image_url)
  }
});
