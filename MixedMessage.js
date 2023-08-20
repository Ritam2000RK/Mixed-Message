const catagory = [
  "slapstick",
  "deadpan",
  "insult",
  "wordplay",
  "self deprecating",
  "random-Jokes",
];

function abc(arr) {
  const randomIndex = arr[Math.floor(Math.random() * arr.length)];
  return randomIndex;
}

function throwMsg() {
  const temp = abc(catagory);
  console.log("Joke Catagory: " + temp);
  if (temp === "slapstick") {
    const msgArr = [
      "Why did the bicycle fall over? Because it was two-tired!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  } else if (temp === "deadpan") {
    const msgArr = [
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "I used to play piano by ear, but now I use my hands.",
      "I'm reading a book about anti-gravity. It's impossible to put down.",
      "I used to be a baker, but I couldn't make enough dough.",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  } else if (temp === "insult") {
    const msgArr = [
      "Why do programmers prefer using the dark mode? Because light attracts bugs!",
      "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
      "Why did the programmer quit his job? He didn't get arrays!",
      "Why do programmers prefer using the stairs? Because elevators are just a series of ups and downs!",
      "Why do programmers hate nature? It has too many bugs!",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  } else if (temp === "wordplay") {
    const msgArr = [
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "I'm on a seafood diet. I see food, and I eat it.",
      "What do you call a bear with no teeth? A gummy bear!",
      "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  } else if (temp === "self deprecating") {
    const msgArr = [
      "I'm not saying I'm indecisive, but I sometimes take longer choosing a Netflix show than watching it.",
      "I'd tell you a joke about my procrastination problem, but I'll come up with it later.",
      "My cooking is so bad, even the smoke alarm encourages me to order takeout.",
      "I used to be a baker, but I couldn't make enough dough.",
      "I'm not lazy; I'm just energy-efficient.",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  } else if (temp === "random-Jokes") {
    const msgArr = [
      "Why don't skeletons fight each other? They don't have the guts!",
      "What's orange and sounds like a parrot? A carrot!",
      "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
      "IWhy did the golfer bring two pairs of pants? In case he got a hole in one!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    ];
    console.log("Joke: " + msgArr[Math.floor(Math.random() * msgArr.length)]);
  }
}

throwMsg();
