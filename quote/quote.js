var quotes = [];
var background = [];
var wiki = [];

// display random array quote
function nextquote() {  
  var rand = Math.random() * 8; // 1 - 10. up to 10 quotes (includes 0).
  rand = parseInt(rand); // get whole integer
  document.body.style.backgroundImage = background[rand];
  $('#moreinfo').attr('src', wiki[rand]); // src wiki to iframe id #moreinfo
  $('#quote').html(quotes[rand]);
  var index = quotes[rand].indexOf("<span");
  twitterQuote = quotes[rand].substring(0, index-1);
  var indexAuthor1 = quotes[rand].indexOf('"author">');
  var indexAuthor2 = quotes[rand].indexOf("</span>");
  twitterAuthor = quotes[rand].substring(indexAuthor1 + 9, indexAuthor2);
}
// use \' for apostrophes.

quotes[0] = '\"Most people can learn a lot more than they think they can. They sell themselves short without trying.\"<span class="author">Elon Musk</span>';
quotes[1] = '\"Honesty is a very expensive gift. Do not expect it from cheap people\"<span class="author">Warren Buffett</span>';
quotes[2] = '\"The first few years I was genuinely quite intimidated by Alan Rickman (Snape), just because of the voice and the way he sort of carries himself. But as I grew up, I realized he was one of the kindest and most supportive members of that cast to me. I mean, Alan has cut short holidays that he\'s been having to come and see me in plays, and take me out for dinner afterwards to talk to me about stuff, I think when he realized how serious I was about wanting to be an actor.\"<span class="author">Daniel Radcliff</span>';
quotes[3] = '\"It is an American tragedy that in the last election, about 80 percent of young people did not vote. That is exactly what the ruling class of this country wants and we have got to change it. So mobilizing, educating and organizing young people is very much at the top of my agenda. \"<span class="author">Senator Bernie Sanders</span>';
quotes[4] = '\"One thing that I will do forever differently after my safe return home is appreciate nature more.\"<span class="author">Astronaut Scott Kelly</span>';
quotes[5] = '\"I\'ve become a big fan of Vietnamese and Cambodian food. Because they cook with very little dairy. So everything was tasty, but incredibly healthy at the same time. Great use of spice, broth, pork, a way of eating well but also just on the cusp of trying to stay healthy at the same time. \"<span class="author">Gordon Ramsay</span>';
quotes[6] = '\"Balancing family life and hobbies being President is hard - truthfully the main thing other than work is just making sure that I\'m spending enough time with michelle and the girls. So we make sure that when I\'m in DC I never miss dinner with them at 6:30 pm - even if I have to go back down to the Oval for work later in the evening. I do work out every morning as well, and try to get a basketball or golf game in on the weekends just to get out of the bubble.\"<span class="author">Barack Obama</span>';
quotes[7] = '\"It would be nice if all governments were as rational as the Nordic governments - reaching compromise and providing services broadly. The Economist had a nice special section on this last week. Africa governments have often been weak but you can\'t write a check to change that.\"<span class="author">Bill Gates</span>';



background[0] = "url('z-elon.jpg')";
background[1] = "url('z-warren.jpg')";
background[2] = "url('z-harry.jpg')";
background[3] = "url('z-bernie.jpg')";
background[4] = "url('z-scott.jpeg')";
background[5] = "url('z-gordon.jpeg')";
background[6] = "url('z-barack.jpg')";
background[7] = "url('z-bill.jpg')";


wiki[0] = "https://en.wikipedia.org/wiki/Elon_Musk";
wiki[1] = "https://en.wikipedia.org/wiki/Warren_Buffett";
wiki[2] = "https://en.wikipedia.org/wiki/Daniel_Radcliffe";
wiki[3] = 'https://en.wikipedia.org/wiki/Bernie_Sanders';
wiki[4] = 'https://en.wikipedia.org/wiki/Scott_Kelly_(astronaut)';
wiki[5] = 'https://en.wikipedia.org/wiki/Gordon_Ramsay';
wiki[6] = 'https://en.wikipedia.org/wiki/Barack_Obama';
wiki[7] = 'https://en.wikipedia.org/wiki/Bill_Gates';

$('#quotebutton').click(function(){
  nextquote();
});

nextquote();


/*
timerLoop();

var index = 0;

function timerLoop() {
  $('body').css('background-image', background[index] );
  index++;
  if(index===10) {
    index = 0;
  }
  setTimeout(timerLoop, 1000);
}
*/



  //Tweeting a quote
  function tweet() {
    var twitter = "https://twitter.com/intent/tweet?text=" + twitterQuote + " -" + twitterAuthor;
    window.open(twitter);
  }
