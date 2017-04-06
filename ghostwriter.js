function writeTweet()
{
  var randIndex;
  var sentence;
  //Credit to H. Jackson Brown, jr.
  //Credit to Joseph Campbell
  //Credit to Chris Evans "Captain America"
  //Credit to Jane Fonda
  var intro = ["The best preperation for tomorrow is ", "We must let go of the life we have planned ", "I'm gonna need a rain check ", "It's never too late "];
  randIndex = randomUpTo((intro.length)-1);
  sentence = intro[randIndex];
  var body = ["for a sunny day ", "it will work out ", "this temperature ", "another gravel road ", "I can't hear "];
  randIndex = randomUpTo((body.length)-1);
  sentence += body[randIndex];
  var end = ["followed by beautiful wind.", "is goodbye."];
  randIndex = randomUpTo((end.length)-1);
  sentence += end[randIndex];
  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
