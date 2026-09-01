// This file is to keep variables separate from the main file
// Can be used to easily add new/personalised information

// All of the childhoods with their information
const childhoodCollection = [
    {
        title: "Young Noble",
        description: "This Kitten was born with a silver kittysnack in their mouth. From birth, they learned all about the finer points of etiquette and how to speak properly. Despite their young age, they have the self-confidence that comes from high birth. But this did not protect them from Walter's law, and they must now leave the Kingdom.",
        cattribute: "Inheritance",
        cattributeDescription: "At the beginning of each game session, an animal (carrier pigeon, tunnelling mole, or migrating turtle) brings the Kitten 1 gold coin stamped with King Walter's profile. It's worth a fortune on the road, and is proof that their parents have not forgotten them (a Purr-ecious item that does not count towards a backpack's limit).",
        backpackContents: "Fancy clothes;Special soft fur shampoo;A finely carved walking cane;Fragrant and exotic spices;A 'bling' object"
    },
    {
        title: "Country Kitten",
        description: "A tough and resourceful farm Kitten, this one is probably the best prepared for the long journey that awaits. They know the seasons and the trees, what is edible and what is poisonous. And although they have none of the good city manners, sleeping under the stars does not scare them at all.",
        cattribute: "Animal Companion",
        cattributeDescription: "The Kitten is accompanied by a beast of their choosing, which is loyal and friendly to them. It is a little smarter than other beasts and can help the Kitten, respond to simple orders, and even take the initiative - but it is a friend, not a servant. It could be a big-eyed spider, a huge turkey or a large, colorful lizard.",
        backpackContents: "A bird call that sounds like birds singing;Cereal bars;A large hat;A walking stick;Their animal companion's favorite food"
    },
    {
        title: "Kitty Merchent",
        description: "Add Later",
        cattribute: "Make Friends",
        cattributeDescription: "Add later",
        backpackContents: "A perfumed silk scarf;Trinkets to exchange or gift;A small set of scales with weights;A compass;A time-estimating machine"
    },
    {
        title: "Soldier's Child",
        description: "Add Later",
        cattribute: "Heroic Lineage",
        cattributeDescription: "Add later",
        backpackContents: "Armor;A guard's spear;Healing balm for fast recovery from wounds;A pipe and pipe-weed (stolen from the old company sergeant);Spicy sauce for food"
    },
    {
        title: "Apprent-hiss",
        description: "Add Later",
        cattribute: "DIY Superstar",
        cattributeDescription: "Add later",
        backpackContents: "A three-inch wrench;A jeweler's magnifying glass;A leather apron;An oil can;Dish soap"
    },
    {
        title: "Abandoned Kitten",
        description: "Add Later",
        cattribute: "Blend In",
        cattributeDescription: "Add later",
        backpackContents: "A dark hood;A light rope and a grappling hook;Some mismatched (but useful) tools;A collection of handkerchiefs stolen from rich people of the kingdom;A good, sharp knife"
    },
    {
        title: "Meowge",
        description: "Add Later",
        cattribute: "Mystic Mentor",
        cattributeDescription: "Add later",
        backpackContents: "A small meowgic spell book(with two additional spells);A meowgic wand;A large hat covered with strange symbols;An odd broom that is also used as a walking stick;A china tea set"
    },
    {
        title: "Hooting Kitten",
        description: "Add Later",
        cattribute: "Mysterious",
        cattributeDescription: "Add later",
        backpackContents: "A long, dark cape;Sunglasses;A large bone flute;Tarot cards;A small, unbreakable mirror"
    },
    {
        title: "Were-Kitten",
        description: "Add Later",
        cattribute: "Overexcited",
        cattributeDescription: "Add later",
        backpackContents: "A hairstlying brush;Thick, warm, waterproof boots;A wooden mask with a (slightly scary) smiling cat's head on it to wear when everything gets to be too much;A big bell tied around the neck by a silver chain;A long chef's knife"
    },
    {
        title: "Meowmy",
        description: "Add Later",
        cattribute: "Children of the Sun",
        cattributeDescription: "Add later",
        backpackContents: "An ornate golden chestplate covered with precious jewels;Paint brushes and paints;A comfortable embroidered cushion to sit on;A whip;A small wooden statue of a strange cat with a dog's head"
    },
    {
        title: "Catnut",
        description: "Add Later",
        cattribute: "Disguise",
        cattributeDescription: "Add later",
        backpackContents: "Winter-dried acorns;Bug armor;A cape of leaves;A bow with arrows;A large black cauldron full of rags and ribbons"
    },
    {
        title: "Future Kitten",
        description: "Add Later",
        cattribute: "Foresight",
        cattributeDescription: "Add later",
        backpackContents: "A badly set up multifunction analyzer;Very high magnification binoculars;A full-face helmet with visor and breathing apparatus;Photo of a strange house with oddly dressed cats in front;A long-distance communicator (there is never a reply)"
    },
    {
        title: "Puppy",
        description: "Add Later",
        cattribute: "Guardian",
        cattributeDescription: "Add later",
        backpackContents: "A necklace with a personalized nameplate;A brush to keep their fur in order;An old record player and some records;A soccer ball;A set of wrenches"
    },
    {
        title: "Sparrowchick",
        description: "Add Later",
        cattribute: "Imitation",
        cattributeDescription: "Add later",
        backpackContents: "Cream for their fragile feathers;A pair of aviator sunglasses;A colorful smoke cannister (which seems to refill all by itself);A compass;A local map"
    },
    {
        title: "Raccoon",
        description: "Add Later",
        cattribute: "Tiny!",
        cattributeDescription: "Add later",
        backpackContents: "A rip=proof cape in a color that blends in anywhere;A long spider-silk rope;A pair of good pliers;A small, thick, comfortable rug;A roll of duct tape"
    },
    { // Note: Bearcub gets two additional backpack slots
        title: "Bearcub",
        description: "Add Later",
        cattribute: "Porter",
        cattributeDescription: "Add later",
        backpackContents: "A unicycle;A lumberjack's ax;A yellow plastic raincoat;A smoke device to make bees sleep;A pillow"
    },
    {
        title: "Kittenfish",
        description: "Add Later",
        cattribute: "No Fear",
        cattributeDescription: "Add later",
        backpackContents: "A large, old fishhook;A solid rope;A large fishtank (to cool off);An inflatable inner tube (just in case);A car headlight (powered by a hand dynamo, shines a long way away)"
    },
    {
        title: "Hoglet",
        description: "Add Later",
        cattribute: "Perfect Pal",
        cattributeDescription: "Add later",
        backpackContents: "A notebook to write down the names of those who annoy him (and those who help him);Flavored cooking oil;A pair of glasses;A skeleton key;A set of darts"
    }
]

// All of the traits
const traits = ['Loving','Loud','Angry','Cold','Greedy','Snobbish','Uncertain','Unruly','Sad','Naive','Proud','Lazy','Domineering','Scared','Bold','Scatty','Stubborn','Shy'];

// List of possible random kitten names
const randKittenNames = ['Zuzu','Chunky','Hotdog','Muffin','Tofu','Sushi'];

// List of skills
const skillArray = [
    {
        title: "Care of Beasts",
        description: "The skill of Kittens who love beasts (animals without speech and imagination), who know about caring for and training them, and who find them endlessly interesting - and useful."
    }
]

const spellArray = [
    {
        name: "Slipper Patrol",
        description: "Until the next dusk, the Kitten and their companions can walk and run without injuring themselves, getting sore legs or paws, or twisting ankles.",
        path: "Lower Meowgie",
        attribute: "Strong",
        difficulty: 1
    },
    {
        name: "Earthworks",
        description: "With a few pawstrokes, the Kitten digs a burrow to hide in, or makes a mound of earth to protect themselves from wind, rain, or enemies",
        path: "Lower Meowgie",
        attribute: "Strong",
        difficulty: 1
    },
]