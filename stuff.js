

var pass = "An elephant makes a big poop. A mouse makes a tiny poop. A one-hump camel makes a one-hump poop. A two-hump camel makes a two-hump poop. Only kidding! Fish poop." +
"And so do birds. And bugs too. Different animals make different kinds of poop. Different shapes, different colors, even different smells. Which end is the snake's behind? What does whale poop look like?" +
"Some stop to poop. Others do it on the move. Some poop here and there. Others do it in a special place. Grown-ups poop. Children poop too. While some children poop on the potty, others poop in their diapers. Some animals poop and pay no attention. Others clean up after themselves." +
"These poop by the water. This one does it in the water. He wipes himself with paper, then flushes it down. All living things eat, so Everyone poops."
var book = pass.split(" ");

function randomText() {
  ary = [];
  disArr = [];
  var x = (parseInt(Math.random() * (book.length - 7) + 0));
  var y = (parseInt(Math.random() * (11 - 1) + 1));
  for (var i = x; i < x + y; i++ ){
    ary.push(book[i]);
  };
  disArr.push(ary.join(' '));
  return disArr[0];
};

var book2 = pass.split(".");

function randomText2() {
  ary = [];
  var x = (parseInt(Math.random() * (book2.length - 0) + 0));
  // var y = (parseInt(Math.random() * (11 - 1) + 1));
  console.log(book2[x]);
};


module.exports.randomText = randomText;
module.exports.randomText2 = randomText2;
