function shout(string)
{
  return string.toUpperCase();
}

function whisper(str)
{
  return str.toLowerCase();
}

function logShout(str)
{
  let shout=str.toUpperCase();
  console.log(shout);
}

function logWhisper(str)
{
  let whisper=str.toLowerCase();
  console.log(whisper);
}

function sayHiToGrandma(str)
{
  if (str === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
}
