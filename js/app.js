// guessing game about me that involves 5 yes / no questions
'use strict';

alert('Welcome to my quiz! Lets see how well you know me when you answer these 5 yes or no questions. Hit the "ok" button to start. Good luck!');

var totalScore= 0;

var alertMessage = 'Aww rats, it\'s a yes or no question! Now you\'ll never know the answer..on to the next question!';

function hometownQuestion() {
    //my hometown
    var hometown = prompt('Is my hometown in NY?');

    if (hometown.toLowerCase() === 'y' || hometown.toLowerCase() === 'yes') {
        alert('You are correct! My hometown is Binghamton, NY just about an hour south of Albany and 3 hours north of the city. Home of the chicken spiedie, Google it! However, no more chicken spiedies for me...I went vegan a year ago so just tofu spiedies for me now!');
        totalScore++;
    } else if (hometown.toLowerCase() === 'n' || hometown.toLowerCase() === 'no') {
        alert('Boo, can\'t you pickup on my NY accent? JK, I don\'t think I have an accent though some people have picked up on it before.');
    } else {
        alert(alertMessage);
    }
    console.log('hometown answer', hometown);
}
hometownQuestion();

function childQuestion() {
    //my kid
    var children = prompt('Do I have 2 children?');

    if (children.toLowerCase() === 'y' || children.toLowerCase() === 'yes') {
        alert('Fail!! You are so wrong! I just have one bambino but he\'s not really a kid anymore, he just turned 24! Yep, I have a kid about the same age as the average student in our 201 class!');
    } else if (children.toLowerCase() === 'n' || children.toLowerCase() === 'no') {
        alert('Nailed it! I just have one bambino but he\'s not really a kid anymore, he just turned 24! Yep, I have a kid about the same age age as the average student in our 201 class!');
        totalScore++;
    } else {
        alert(alertMessage);
    }
    console.log('children answer', children);
}
childQuestion();

function tattooQuestion() {
    //tattoos
    var tattoos = prompt('Do I have more than 2 tattoos?');

    if (tattoos.toLowerCase() === 'y' || tattoos.toLowerCase() === 'yes') {
        alert('Yepper, I\'ll be full of regrets when I\'m 70! Not really, I love tats, I only have 6 now so I\'m eager to get a few more.');
        totalScore++;
    } else if (tattoos.toLowerCase() === 'n' || tattoos.toLowerCase() === 'no') {
        alert('Aw snap! You\'re wrong! I have more than 2 tattoos, in fact...I have 6!');
    } else {
        alert(alertMessage);
    }
    console.log('tattoo answer', tattoos);
}
tattooQuestion();

function zombieQuestion() {
    //zombie
    var zombie = prompt('Do you think I\'ve been on Rob Zombie\'s tour bus?');

    if (zombie.toLowerCase() === 'y' || zombie.toLowerCase() === 'yes') {
        alert('Haa! What kind of girl do you think I am?? A pretty cool one, right? Yes, I have been on Rob Zombie\'s tour bus! He stayed at the hotel I was working at - he introduced me to his super sweet girlfriend and gave me a quick peek into the bus. It was gorgeous inside and there was a big fat cat chilling on the couch!');
        totalScore++;
    } else if (zombie.toLowerCase() === 'n' || zombie.toLowerCase() === 'no') {
        alert('Are you familiar with Rob Zombie? He\'s super freaky looking but CRAZY kind and let me get a peek of his tour bus when he stayed at the hotel I was working at! Sorry you got this one wrong');
    } else {
        alert(alertMessage);
    }
    console.log('zombie answer', zombie);
}
zombieQuestion();

function balloonQuestion() {
    //balloon
    var balloon = prompt('Have I been up in a hot air balloon?');

    if (balloon.toLowerCase() === 'y' || balloon.toLowerCase() === 'yes') {
        alert('You bet I have! It was at a festival in my hometown and my boss gave me the 2 tickets he won in a raffle. It was a weirdly quiet experience but super cool seeing the town so tiny below me!');
        totalScore++;
    } else if (balloon.toLowerCase() === 'n' || balloon.toLowerCase() === 'no') {
        alert('I\'ve done a lot of cool things in my life and this was one of them! Sorry, you guessed wrong here');
    } else {
        alert('balloon answer', alertMessage);
    }
    console.log('balloon answer',balloon);
}
balloonQuestion();

//in progress - get this working and then incorporate the questions below (as those appear to be more challenging)
function getFinalScore() {
    return 'You got ' + totalScore + ' correct, out of 5';
};
getFinalScore();


// guessing game
function cruises(){

    alert('Ready for more? I\'ve got a guessing game for you! You\'ve got 4 chances to guess the right number to this next question.');

    var myCruises = 10;
    var attempts = 0;

    while (attempts < 4) {
        var userGuess = Number(prompt('How many cruises have I been on?'));

        if (userGuess === myCruises) {
            alert('You guessed right! I have been on 10 cruises!!');
            console.log(userGuess);
            totalScore++;
            break;
        } else if (userGuess < myCruises) {
            alert('You guessed too low!');
        } else if (userGuess > myCruises) {
            alert('You\'ve guessed to high!');
        } else {
            alert('You didn\'t take a guess');
        }
        console.log('number of cruises that the user guessed',attempts);

        if (attempts === 3) {
            alert('Sorry! No more attempts left. The correct answer was that I have been on ' + myCruises + ' cruises!');
            break;
        }
        attempts++;
    }
}
cruises();

function arrayChecker(){
    alert('How about another one? This time, you\'ll have 6 chances to guess one of the 2 states that I have lived in. Be sure to use the state abbrevations for your answers!');

    var myStates = ['NY', 'PA'];
    var tries = 6;
    var correctStateAnswer = false;

    // outer loop is for tracking the number of attempts
    for (var i = 0; i < tries; i++) {

        //inner loop is for looping over the myStates array
        for (var j = 0; j < myStates.length; j++) {
            var userStateGuess = prompt('Using state abbreviations... Can you guess a state that I have lived in besides Washington? HINT: think East Coast!');

            if (userStateGuess.toUpperCase() === myStates[j]) {
                alert('You got it right! I have lived in ' + userStateGuess + '! The correct answers were NY and PA');
                correctStateAnswer = true;
                console.log('this is the state guessed by the user', userStateGuess);
                totalScore++;
                console.log('users total score', totalScore);
                break;
            } else if (userStateGuess.toUpperCase() !== myStates[j]) {
                alert('Sorry, you guessed ' + userStateGuess + ' and I have never lived there.');
                console.log('this is the state guessed by the user', userStateGuess);
                break;
            }
        }

        tries++;

        if (i === 5) {
            alert('Times up! No more attempts left. The correct answer was that I have lived in ' + myStates[0] + ' and ' + myStates[1] + '!');
            break;
        }

        if (correctStateAnswer === true) {
            break;
        }
    }
}
arrayChecker();

alert('Thanks for playing! You got ' + totalScore + ' out of 7 correct!');
