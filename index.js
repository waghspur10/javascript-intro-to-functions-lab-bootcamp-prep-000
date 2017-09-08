function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string){
  if(string==='I love You Grandma'){
    return 'I Love You Too';
  }
  else if(string === string.toLowerCase()){
    return "I can't hear you";
  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!"
  }
}
