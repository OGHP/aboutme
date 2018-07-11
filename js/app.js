// guessing game about me that involves 5 yes / no questions
'use strict';

var alertMessage = 'Aww rats, it\'s a yes or no question! Now you\'ll never know the answer..on to the next question!';

//my hometown
var hometown = prompt('Is my hometown in NY?');

if (hometown.toLowerCase() === 'y' || hometown.toLowerCase() === 'yes') {
    alert('You are correct! My hometown is Binghamton, NY just about an hour south of Albany and 3 hours north of the city. Home of the chicken spiedie, Google it! However, no more chicken spiedies for me...I went vegan a year ago so just a tofu spiedie for me now!');
} else if (hometown.toLowerCase() === 'n' || hometown.toLowerCase() === 'no') {
    alert('Boo, can\'t you pickup on my NY accent? JK, I don\'t think I have an accent though some people have picked up on it before.');
} else {
    alert(alertMessage);
}
console.log('hometown answer', hometown);

//my kid
var children = prompt('Do I have 2 children?');

if (children.toLowerCase() === 'y' || children.toLowerCase() === 'yes') {
    alert('Fail!! You are so wrong! I just have one bambino but he\'s not really a kid anymore, he just turned 24! Yep, I have a kid about the same age age as the average student in our 201 class!');
} else if (children.toLowerCase() === 'n' || children.toLowerCase() === 'no') {
    alert('Nailed it! I just have one bambino but he\'s not really a kid anymore, he just turned 24! Yep, I have a kid about the same age age as the average student in our 201 class!');
} else {
    alert(alertMessage);
}
console.log('children answer', children);

//tattoos
var tattoos = prompt('Do I have more than 2 tattoos?');

if (tattoos.toLowerCase() === 'y' || tattoos.toLowerCase() === 'yes') {
    alert('Yepper, I\'ll be full of regrets when I\'m 70! Not really, I love tats, I only have 6 now so I\'m eager to get a few more.');
} else if (tattoos.toLowerCase() === 'n' || tattoos.toLowerCase() === 'no') {
    alert('Aw snap! You\'re wrong! I have more than 2 tattoos, in fact...I have 6!');
} else {
    alert(alertMessage);
}
console.log('tattoo answer', tattoos);

//zombie
var zombie = prompt('Do you think I\'ve been on Rob Zombie\'s tour bus?');

if (zombie.toLowerCase() === 'y' || zombie.toLowerCase() === 'yes') {
    alert('Haa! What kind of girl do you think I am?? A pretty cool one, right! Yes, I have been on Rob Zombie\'s tour bus! He stayed at the hotel I was working at - he introduced me to his super sweet girlfriend and gave me a quick peek into the bus. It was gorgeous inside and there was a big fat cat chilling on the couch!');
} else if (zombie.toLowerCase() === 'n' || zombie.toLowerCase() === 'no') {
    alert('Are you familiar with Rob Zombie? He\'s super freaky looking but CRAZY kind and let me get a peek of his tour bus when he stayed at the hotel I was working at! Sorry you got this one wrong');
} else {
    alert(alertMessage);
}
console.log('zombie answer', zombie);

//balloon
var balloon = prompt('Have I been up in a hot air balloon?');

if (balloon.toLowerCase() === 'y' || balloon.toLowerCase() === 'yes') {
    alert('You bet I have! It was at a festival in my hometown and my boss gave me the 2 tickets he won in a raffle. It was a weirdly quiet experience but super cool seeing the town so tiny below me!');
} else if (balloon.toLowerCase() === 'n' || balloon.toLowerCase() === 'no') {
    alert('I\'ve done a lot of cool things in my life and this was one of them! Sorry, you guessed wrong here');
} else {
    alert('balloon answer', alertMessage);
}
console.log('balloon answer',balloon);
