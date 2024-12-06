function displayTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const time = hour+":"+minute;
  document.getElementById("time").innerHTML = time;
}

function grabQuote() {
  const quotes = [
    "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it - Ferris Bueller",
    "Our lives are determined by opportunities. Even the ones we miss - Benjamin Button",
    "It's only after we've lost everything that we're free to do anything - Tyler Durden",
    "Great men are not born great, they grow great - Don Vito Corleone",
    "Some people can't believe in themselves until someone believes in them first - Robin Williams",
    "The night is always darkest right before the dawn. And I promise you, the dawn is coming - Harvey Dent",
    "Just because someone stumbles and loses their path, doesn't mean they're lost forever - Prof X",
    "It is not our abilities that show what we truly are. It is our choices - Albus Dumbledore",
    "All we have to decide is what to do with the time that is given to us - Gandalf",
    "We are who we choose to be - Green Goblin",
    "The only thing standing between you and your goal is the bullshit story you keep telling youself as to why you can't achieve it - Jordan Belfort"
  ];
  const rand = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[rand];
}
window.onload = function () {
  displayTime();
  grabQuote();
  setInterval(displayTime, 1000);
};
