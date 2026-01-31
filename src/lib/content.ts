import { Microscope, Cpu, FlaskConical, Calculator, Rocket, BookOpen, Award, FileText } from 'lucide-react';

// export const categories = [
//   'All Categories',
//   'Mini Scientists',
//   'Young Innovators',
//   'Junior Engineers',
//   'Math Wizards',
//   'Research Explorers'
// ];

export const creativePrompts = [
  {
    tag: 'Eco-Innovations',
    title: 'Eco-Innovations: Saving the Planet with Science',
    description: 'Design a gadget that reduces waste, or conduct an experiment on how plants react to different conditions. Show us your green ideas!',
    hint: 'eco innovation'
  },
  {
    tag: 'Space Science',
    title: 'Space Science and Star Explorations',
    description: 'What would a colony on Mars look like? Design a spaceship or write a story about discovering a new planet.',
    hint: 'space science'
  },
  {
    tag: 'Life Sciences',
    title: 'Life Sciences and the Human Body',
    description: 'Explore how our bodies work! Create a model of DNA, or write about how amazing the human brain is.',
    hint: 'life science'
  },
  {
    tag: 'Robotics',
    title: 'Machine Marvels and Robotics',
    description: 'Build a robot from recycled materials or design an app that could help your community. Let your imagination run wild!',
    hint: 'robotics'
  },
  {
    tag: 'Mathematics',
    title: 'Math Around Us: Geometry in Daily Life',
    description: 'Discover math in the world around you. Create art with patterns or invent a new math puzzle for others to solve.',
    hint: 'mathematics'
  },
];





export const submissionCategories = [
    {
        title: 'Mini Scientists',
        icon: Microscope,
        description: 'For our youngest explorers, this category is all about hands-on science and observing the world.',
        details: [
            'Simple experiments with steps, photos, and observations',
            'Environmental science and sustainability ideas',
            'Health, biology, and nature-based investigations'
        ]
    },
    {
        title: 'Young Innovators',
        icon: Cpu,
        description: 'Dream up the technology of the future! This is the place for your brilliant app ideas, game designs, and gadget concepts.',
        details: [
            'Design of a gadget or useful app',
            'AI, coding, or game logic written in a fun way',
            'Drawings + descriptions of new technology ideas'
        ]
    },
    {
        title: 'Junior Engineers',
        icon: FlaskConical,
        description: 'If you love to build, tinker, and create, this is your category. Show us what you can make!',
        details: [
            'Build something cool using recycled or home materials',
            'Photos and steps of robotics or electronics kits',
            'Model bridges, circuits, or marble-run physics challenges'
        ]
    },
    {
        title: 'Math Wizards',
        icon: Calculator,
        description: 'Math is more than just numbers—it’s puzzles, patterns, and art! Share your love for math in a creative way.',
        details: [
            'Original puzzles, riddles, or brain teasers',
            'Patterns and geometry found in real life',
            'Math-art or number-based comic strips'
        ]
    }
];

// ── New: Activity → Category mapping
export const activityToCategoryMap: Record<string, typeof submissionCategories[number]['title']> = {
  // High-confidence direct matches
  'Math Puzzles':          'Math Wizards',
  'Master Mind':           'Math Wizards',
  'Abacus Presentation':   'Math Wizards',     // math technique focus
  'Life science':          'Mini Scientists',
  'Planet science':        'Mini Scientists',
  'Human Body':            'Mini Scientists',
  'Robotics':              'Junior Engineers',
  'Gaming & Innovations':  'Young Innovators',

  // Slightly broader / context-dependent (good defaults)
  'Idea Creation':         'Young Innovators',   // invention & tech ideas
  'Projects':              'Junior Engineers',   // maker/DIY default
  'Story Writing':         'Mini Scientists',    // experiment narrative / observation story
};

// Optional helper function (recommended for form / display logic)
export function getCategoryForActivity(activity: string): typeof submissionCategories[number]['title'] | null {
  const normalized = activity.trim();
  return activityToCategoryMap[normalized] || null;
}

// Optional: reverse lookup → get all activities that belong to one category
export function getActivitiesForCategory(categoryTitle: string): string[] {
  return Object.entries(activityToCategoryMap)
    .filter(([, cat]) => cat === categoryTitle)
    .map(([act]) => act);
}






















export const participationContent = {
    researchExplorers: {
        icon: Rocket,
        title: 'Student Research Explorers',
        description: 'In this new section, students take a real-world scientific or engineering concept and turn it into something they can explain, explore, or replicate.',
        formats: [
            'Illustrated or written research conversion',
            'Mini-model photos or poster explanations',
            'Video presentation or oral storytelling'
        ]
    },
    experimentToArticle: {
        icon: FileText,
        title: 'Experiment to Article',
        description: 'Turn your science experience into a mini-article.',
        details: [
            'A short write-up about a science experiment or activity',
            'What you observed, learned, or discovered',
            'Include photos or drawings of your model or setup'
        ]
    },
    recognition: {
        icon: Award,
        title: 'Recognition and Participation',
        description: 'Each valid submission will receive:',
        benefits: [
            'E-Certificate of Participation',
            'A chance to be featured in the journal (online or print)',
            'A featured e-book of all kindness stories'
        ]
    },
    newsletter: {
        icon: BookOpen,
        title: 'Monthly STEM Spark Newsletter',
        description: 'Top recognitions will be announced in our newsletter:',
        awards: [
            'STEM Star of the Month',
            'Bright Builder',
            'Innovation Champion',
            'Math Mastermind',
            'Young Research Explorer'
        ]
    }
}

const volumesData = {
  'Mini Scientists': { icon: Microscope },
  'Young Innovators': { icon: Cpu },
  'Junior Engineers': { icon: FlaskConical },
  'Math Wizards': { icon: Calculator },
};


export const journalYears = [
  {
    year: 2024,
    issues: [
      {
        issue: 3,
        date: 'Fall 2024',
        title: 'Math Fun Zone',
        coverHint: 'math doodle',
        volumes: [
          {
            title: 'Math Wizards',
            icon: volumesData['Math Wizards'].icon,
            articles: [
              {
                title: 'The Art of Tessellation',
                author: 'Chloe, Age 14',
                slug: 'the-art-of-tessellation',
                imageHint: 'pattern doodle',
                content: '<p>Tessellations are patterns of shapes that fit together perfectly without any gaps. I learned about M.C. Escher and got inspired to create my own tessellation art with birds and fish. It\'s like a puzzle where you have to design the piece yourself!</p>'
              },
              {
                title: 'A Sudoku Solving Strategy',
                author: 'Sam, Age 11',
                slug: 'sudoku-solving-strategy',
                imageHint: 'math doodle',
                content: '<p>I love Sudoku! I wrote down my favorite strategy for solving hard puzzles. It involves looking for "naked pairs" and "hidden singles". I made a guide with examples to help other people solve puzzles faster.</p>'
              },
              {
                title: "Fractal Art with Math",
                author: "Chloe, Age 14",
                slug: "fractal-art-with-math",
                imageHint: "pattern doodle",
                content: "<p>I used a free online fractal generator to explore the Mandelbrot set. I learned that these incredibly complex and beautiful patterns are generated from a very simple mathematical equation. I picked my favorite views, adjusted the color schemes, and printed them out. It shows that math can be art.</p>"
              },
            ]
          }
        ]
      },
      {
        issue: 2,
        date: 'Summer 2024',
        title: 'The Space Explorers Issue',
        coverHint: 'space doodle',
        volumes: [
            {
                title: 'Mini Scientists',
                icon: volumesData['Mini Scientists'].icon,
                articles: [
                    {
                        title: 'My First Telescope',
                        author: 'Ava, Age 9',
                        slug: 'my-first-telescope',
                        imageHint: 'doodle science',
                        content: '<p>I got a telescope for my birthday! The moon looks so cool up close. I could see all the craters. I drew a map of the craters I saw. I also saw Jupiter and some of its moons! They looked like tiny stars next to it.</p><p>It is amazing to think how big the universe is. I want to be an astronomer when I grow up.</p>'
                    },
                ]
            },
            {
                title: 'Junior Engineers',
                icon: volumesData['Junior Engineers'].icon,
                articles: [
                     {
                        title: 'Designing a Rover for Europa',
                        author: 'Leo, Age 12',
                        slug: 'designing-a-rover-for-europa',
                        imageHint: 'space doodle',
                        content: '<p>Europa is one of Jupiter\'s moons and it might have a liquid ocean under its icy shell. I designed a rover that could explore it. It has a drill to get through the ice and a submarine to explore the ocean. It would have special lights because it\'s so dark down there. It would be powered by a small nuclear reactor to keep it warm and running for a long time.</p>'
                    }
                ]
            },
            {
                title: 'Young Innovators',
                icon: volumesData['Young Innovators'].icon,
                articles: [
                    {
                        title: 'A Short Story: The Last Starlight',
                        author: 'Chloe, Age 14',
                        slug: 'a-short-story-the-last-starlight',
                        imageHint: 'space doodle',
                        content: '<p>In a galaxy far away, a lone star was dying. Its light was the only thing keeping the tiny planet of Aethel warm. The Aethelians, a species of crystalline beings, knew they had to find a new home... (the story continues about their journey to find a new star).</p>'
                    },
                    {
                        title: 'What If We Lived on a Gas Giant?',
                        author: 'Sam, Age 11',
                        slug: 'what-if-we-lived-on-a-gas-giant',
                        imageHint: 'space doodle',
                        content: '<p>You couldn\'t stand on a gas giant like Jupiter, so we would have to live in floating cities. These cities would be like giant balloons. We would have to be careful of the massive storms, like the Great Red Spot. It would be a very different life!</p>'
                    },
                ]
            }
        ]
      },
       {
        issue: 1,
        date: 'Spring 2024',
        title: 'The Green Innovations Issue',
        coverHint: 'eco doodle',
        volumes: [
             {
                title: 'Junior Engineers',
                icon: volumesData['Junior Engineers'].icon,
                articles: [
                     {
                        title: 'Building a Solar-Powered Buggy',
                        author: 'Mia, Age 11',
                        slug: 'building-a-solar-buggy',
                        imageHint: 'eco doodle',
                        content: '<p>I used a kit to build a small solar-powered car. It was cool to see how the solar panel could make the motor run just with sunlight. I experimented with different angles of the panel to see when the car would go fastest. It works best in direct sunlight around noon.</p>'
                    },
                    {
                        title: "Recycled Plastic Rover",
                        author: "Leo, Age 10",
                        slug: "recycled-plastic-rover",
                        imageHint: "kid with robot doodle",
                        content: "I built a rover model using old plastic bottles, straws, and cardboard. It has wheels that turn and a little grabber arm made from clothes-pegs. My project shows that we can reuse materials to create something new and fun, instead of throwing them away. I hope my rover inspires others to think about recycling in a creative way!"
                    },
                    {
                        title: "Building a Birdhouse",
                        author: "Alex, Age 11",
                        slug: "building-a-birdhouse",
                        imageHint: "building doodle",
                        content: "My dad helped me cut the wood, and I assembled a birdhouse for our backyard. I learned how to use a hammer and nails safely. I painted it bright blue and put it up in a tree. A family of finches moved in a week later! It's so cool to watch them come and go."
                    },
                ]
            },
            {
                title: 'Mini Scientists',
                icon: volumesData['Mini Scientists'].icon,
                articles: [
                    {
                        title: 'How to Save Water at Home: An Infographic',
                        author: 'Zoe, Age 8',
                        slug: 'how-to-save-water-at-home',
                        imageHint: 'eco doodle',
                        content: '<p>I drew an infographic with tips on how to save water. Things like turning off the tap when you brush your teeth and taking shorter showers. Every drop counts! I used colorful drawings to make it fun to look at.</p>'
                    },
                    {
                        title: 'Recycled Plastic Art',
                        author: 'Alex, Age 10',
                        slug: 'recycled-plastic-art',
                        imageHint: 'eco doodle',
                        content: '<p>I collected plastic bottles and caps for a month and made a big sculpture of a sea turtle. It\'s a reminder that plastic pollution hurts ocean animals. I hope it makes people think about recycling more.</p>'
                    },
                    {
                        title: "The Journey of a Water Droplet",
                        author: "Mia, Age 8",
                        slug: "journey-of-a-water-droplet",
                        imageHint: "magnifying glass doodle",
                        content: "I created a poster that illustrates the water cycle, telling the story of a single water droplet named 'Drippy'. Drippy evaporates from the ocean, becomes part of a cloud, falls as rain, and flows in a river back to the sea. I used cotton balls for clouds and glitter for rain to make it look cool!"
                    },
                    {
                        title: "Lemon Battery Experiment",
                        author: "Zoe, Age 9",
                        slug: "lemon-battery-experiment",
                        imageHint: "experiment doodle",
                        content: "I followed instructions to build a battery out of lemons, zinc nails, and copper coins. I was able to generate enough electricity to power a small LED light! It was amazing to see a fruit create power. I learned that the acid in the lemon helps the chemical reaction between the two different metals."
                    },
                ]
            },
            {
              title: 'Young Innovators',
              icon: volumesData['Young Innovators'].icon,
              articles: [
                {
                  title: "My First Python Game",
                  author: "Sam, Age 12",
                  slug: "my-first-python-game",
                  imageHint: "coding doodle",
                  content: "I learned Python and created a simple text-based adventure game. You have to make choices to find a hidden treasure in a castle. It has different rooms and a dragon you have to trick! It was challenging to handle all the different user inputs and game states, but I'm proud of how it turned out. You can find the code on my GitHub!"
                }
              ]
            }
        ]
      }
    ].sort((a,b) => b.issue - a.issue)
  }
].sort((a, b) => b.year - a.year);

export const dummyUser = {
  name: "Alex Doe",
  email: "alex.doe@example.com",
};

export const dummySubmissions = [
  {
    title: "Recycled Plastic Rover",
    category: "Junior Engineers",
    date: "2024-03-15",
    status: "Published",
  },
  {
    title: "A Sudoku Solving Strategy",
    category: "Math Wizards",
    date: "2024-09-01",
    status: "Published",
  },
  {
    title: "My Newest Invention: The Homework Machine",
    category: "Young Innovators",
    date: "2024-10-05",
    status: "Under Review",
  },
  {
    title: "How Do Plants Breathe?",
    category: "Mini Scientists",
    date: "2024-10-21",
    status: "Needs Revision",
  },
];
