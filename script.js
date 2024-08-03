const stages = [
    {
        message: `Welcome to Dr Andrew's Lab. It's dangerous to go alone. Find something that will help you on your way.\n Hint: if it seems impossible, it simply means there's another solution - Edison. \nEnter the number of the box that the 'tool' was in. \nBe careful, if you get too many wrong, you will have to turn back. You have 2 chances to get it right.`,
        correctAnswer: 1,
        passcode: "1*****",
        maxAttempts: 2
    },
    {
        message: `Password: 1*****\nYour tool when shined upon surfaces may reveal the path that must be taken. \nWhen you find the mirrors, what is the number of images you see when you keep the mirrors at 90 degrees? `,
        correctAnswer: 4,
        passcode: "14****",
        maxAttempts: 2
    },
    {
        message: `Password: 14****\nGreat progress so far, but this next clue deceives not just your eyes, but your ears as well! \nDepending on what the scientist tells you, enter the corresponding number: \nIf you hear 'Iphone', enter 1. If you hear 'I'm Home', enter 2. If you hear 'For a Knife', enter 3. If you hear Deception, enter 4\nBe careful, you only have 3 lives for this clue.`,
        correctAnswer: 4,
        passcode: "144***",
        maxAttempts: 3
    },
    {
        message: `Password: 144***\nA marvellous painting is it not? Admire it. It may be the last thing you will see in the lab. \nThere is a number hidden in the painting. Find it to move forward. \nBe careful, you only have 2 lives for this clue.`,
        correctAnswer: 6,
        passcode: "1446**",
        maxAttempts: 2
    },
    {
        message: `Password: 1446**\nA hidden number waits out of sight, \nan indicator will show it when treated right. \nApply a base to turn the liquid pink, \nAnd the number will be revealed in a blink.`,
        correctAnswer: 9,
        passcode: "14469*",
        maxAttempts: 2
    },
    {
        message: `Password: 14469*\nScan the Document given to you. The mistake in it will be The final digit you need. \nBe careful, you only have 2 lives for this clue.`,
        correctAnswer: 5,
        passcode: "144695",
        maxAttempts: 2
    },
    {
        message: `Password: 144695\nEnter the number you need in the box. If you can find it.... \nAll that you need to escape will be in it`,
        correctAnswer: null,
        passcode: null,
        maxAttempts: null
    }
];

let currentStage = 0;
let attempts = 0;

const messageElement = document.getElementById('message');
const inputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');

function displayStage() {
    const stage = stages[currentStage];
    messageElement.textContent = stage.message;
    inputElement.value = '';
    attempts = 0;
    nextButton.style.display = 'none';
}

function handleSubmit() {
    const stage = stages[currentStage];
    const userAnswer = parseInt(inputElement.value);

    if (userAnswer === stage.correctAnswer || stage.correctAnswer === null) {
        if (stage.passcode) {
            messageElement.textContent = `Password: ${stage.passcode}`;
        }
        nextButton.style.display = 'block';
    } else {
        attempts++;
        if (attempts >= stage.maxAttempts) {
            messageElement.textContent = `Your time here is up. Please exit.`;
            submitButton.disabled = true;
        } else {
            messageElement.textContent = `Oops! You've lost a life! Only ${stage.maxAttempts - attempts} left.`;
        }
    }
}

function handleNext() {
    currentStage++;
    if (currentStage < stages.length) {
        displayStage();
        submitButton.disabled = false;
    } else {
        messageElement.textContent = 'Congratulations! You have escaped the room!';
        submitButton.disabled = true;
    }
}

submitButton.addEventListener('click', handleSubmit);
nextButton.addEventListener('click', handleNext);

displayStage();
