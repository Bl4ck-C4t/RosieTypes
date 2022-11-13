// saviour, villain, anxious, confident, workocholic,
// true, engima, smart, indulging, romantic

let questions = [
    {
        title: 'You see a stranger in pain. What do you do?',
        options: [
            "I instantly rush to the rescue!!", "I wish to help but im too anxious ;(",
            "I could help if I had the time...", "Well... I guess if they seem nice... :>",
            "Not my problem."
        ],
        points: [
            [2, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0.5, 1, 0, 0, 0],
            [0.5, 0, 0.2, 0, 2, 0.5, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 3],
            [0, 2, 0.2, 0.5, 0.2, -1, 1, 1, 0, 0],

        ]
    },
    {
        title: 'You enter a room that has 3 people talking in it. They look at you strangely.',
        options: [
            "I go to ask them if they need help with something!!", "I'm terrified and want to run far far away T-T",
            "I wouldn't have any issue with this. B)", "I wonder what they know about me....",
            "Maybe they want to play a game :)"

        ],
        points: [
            [2, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 1, 1, 0, 0, 0],
            [1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0.5, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 2, 0.5],
        ]
    },
    {
        title: 'My favourite animal is?',
        options: [
            "Shrew", "Cat", "Something invisible.", "A service dog :P",
            "an Owl", "a Dragon", "a Fox"

        ],
        points: [
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0.5, 0, 0, 0, 1, 1],
            [0, 0, 2, 0, 0, 0.1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        ]
    },
    {
        title: 'You receive an invitation to an event with a lot of people.',
        options: [
            "I'd hate to upset the person that invited me, so I have to go!!",
            "I have too much work to go to these...",
            "Di-d... you say a l-lot of people? -hides under bed-",
            "I would go if it sounds very fun! I need some distraction :D",
            "I could go, but only if I can learn something new or useful from it."

        ],
        points: [
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 1, 0, 0, 0, 0, 0, 2, 0, 0],
        ]
    },
    {
        title: "What do you think of St. Valentine's day?",
        options: [
           "I'd rather work through it.",
            "Aww, it's the most wonderful day!!",
            "I usually feel uncomfortable during it :<",
            "I LOVE CHOCOLATE!!!"

        ],
        points: [
            [0, 0, 0, 0, 1, 0.1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0.6, 0, 0, 0, 3],
            [0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],

        ]
    },
    {
        title: "You hear someone criticize you behind your back!",
        options: [
            "I dismiss it. People that do that don't deserve being listened to.",
            "I feel deeply hurt, but over time think about it and wonder if maybe I did something wrong.",
            "I just vanish and never appear near anyone.",
            "I mostly dismiss it. They don't know me much at all..."
        ],
        points: [
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0.5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 0, 0, 0]
        ]
    },
    {
        title: "You see a complex but fun puzzle, what do you do?",
        options: [
            "I let it be and focus on deadlines.",
            "I have no idea how to solve it, but I keep on trying, since it's fun :D",
            "I love a challenge. I pick it up and do my best to solve it. I would probably lose a ton of time in it though...",
            "I pick it up to solve it, BUT!! First i need to make sure there is nobody watching me 0-0"
        ],
        points: [
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],

        ]
    },
    {
        title: "I see a bank robber running to escape, but he tripps and falls.",
        options: [
           "I ask him if he is ok, and help him get up.... I just can't help it D:",
            "I teleport home and erase this from my mind.",
            "I call the cops while wondering if it's possible for me to knock him out or tie him with something...",
            "So when he trips and falls, does he fall for me? <3",
        ],
        points: [
            [3, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],


        ]
    },
    {
        title: "A student calls you to help with homework while you were just enjoying a movie.",
        options: [
            "I put work first.",
            "Omggg.... why during the movie... ;( I would tell him to call me later.",
            "My mind is eager to solve problems, so I could help !"
        ],
        points: [
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],

        ]
    },
    {
        title: "What's your opinion on Christmas?",
        options: [
            "JINGLE BELLSSSSS!!!",
            "I associate it with stressful, unfinished deadlines 0_0.",
            "The perfect time to make new friends :)"
        ],
        points: [
            [0, 0, 0, 0, 0, 1, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
        ]
    },
    {
        title: "Favourite color?",
        options: [
            "Whatever yours is!",
            "W-why, do you want to know?",
            "Orange.",
            "Black",
            "Red"
        ],
        points: [
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 3],
        ]
    },
    {
        title: "You hear an acquaintance misuse a scientific idea.",
        options: [
            "I have to correct them to set the record straight!",
            "I keep on repeating what the correct usage is in my head but never say it out loud.",
            "That's to be expected. *smirks*",

        ],
        points: [
            [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 3, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
        ]
    },
    {
        title: "What would you do if an evil person asked you for help?",
        options: [
           "Evil is evil, good is good, and that's that. I wouldn't help someone like that.",
           "I don't think of people this way. Everyone can be good and I must help them see it regardless of who they are!",
            "If i help them, they will learn too much about me... I'd rather not...",
            "I'd just refuse."

        ],
        points: [
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 2, 0, 0, 0],
        ]
    },
    {
        title: "A good friend has put a lot of work into making a gift for you, but you really don't like it.",
        options: [
            "I tell it to them as it is.",
            "I accept it with gratitude and make sure they think I like it.",
            "I accept it reluctantly.",
            "I return it and stare at them with a pokerface >:)",
        ],
        points: [
            [0, 0, 0, 3, 0, 0, 0, 1, 0, 0],
            [2, 0, 2, 0, 0, 1, 0, 0, 0, 2],
            [0, 0.4, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    },
    {
        title: "How knowledgeable are you?",
        options: [
            "Way, way way too much. Even I am surprised at times @-@",
            "I know loads of stuff.",
            "I don't really know much at all... [get a grippppp]",
            "I know a few things, but they are enough for me to work well."
        ],
        points: [
            [0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 3, 0, 0],
            [0, 0, 3, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 2, 1, 0, 0, 0, 0],
        ]
    },
    {
        title: "Someone confidently keeps on telling you how you should act and what you should do!",
        options: [
            "They don't know a thing about me. They just think, they do.",
            "I get very frustrated and might even go on proving to them how wrong they are.",
            "I'd ignore it or joke around with it :P",
            "I think about it... Maybe they are right?"
        ],
        points: [
            [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
            [0, 3, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
        ]
    },
    {
        title: "It's late at night. How do you get ready to sleep?",
        options: [
            "Set my schedule for tomorrow straight. Immediately go to bed. Can't afford to stay up late.",
            "I get distracted by talking to someone [again] and end up going to bed too lateeee.",
            "I go to bed thinking of thoughts 0///0. I grab my hand.... And i put it on the pillow XD",
            "Think about the day. Worry about the day to come >_<",
            "I note down secret notes about people in my secret folder in the secret plank behind the bookshelf.",

        ],
        points: [
            [0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 3, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 4],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],

        ]
    },
    {
        title: "When it comes to competitions you are:",
        options: [
            "The one who loves them! Nothing better then winning!!",
            "Making sure people don't take things personally or feel hurt!!",
            "Thinking of the best strategy/move to make while my brain is overheating, but that's the fun in it!",
            "hiding somewhere and hoping nobody finds me 0-0"

        ],
        points: [
            [0, 0, 0, 4, 0, 0, 0, 1, 0, 0],
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],

        ]
    },
    {
        title: "Which environment do you prefer more?",
        options: [
            "City", "Farm - I love helping around and feeding the animals",
            "Suburbs", "Home", "Forest"

        ],
        points: [
            [0, 0, 0, 2, 0, -1, 0, 0, 2, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0, 0, 2],


        ]
    },
    {
        title: "Did you enjoy the quiz?",
        options: [
            "I could have completed sooo many deadlines instead of doing this.",
            "Yessss, i loved it!",
            "Well it was weird. It kinda scared me.",
            "I was terrified at how much it knows!!!!",
            "I just hope my feedback helps make it better :)",
            "NEVER TAKING ANY QUIZ AGAIN!!"

        ],
        points: [
            [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 2, 3, 2],
            [0, 0, 3, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
            [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 1, 0, 0, 0, 0, 0, 0, 0],

        ]
    }

]

export default questions;