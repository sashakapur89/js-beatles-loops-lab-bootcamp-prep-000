function theBeatlesPlay(musicians, instruments){
  var newArray = {};
  for (let counter = 0; counter<musicians.length; counter++){
      newArray[newArray.length]= musicians[counter] + " plays " + instruments[counter]
    }
    return newArray
  }