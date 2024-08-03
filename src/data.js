const instagramUsers = [
    {
        username: "johndoe",
        fullName: "John Doe",
        bio: "Traveler | Photographer | Foodie",
        profilePicture: "https://example.com/images/johndoe.jpg",
        followers: 1200,
        following: 180,
        posts: 35
    },
    {
        username: "janedoe",
        fullName: "Jane Doe",
        bio: "Fitness Enthusiast | Wellness Coach",
        profilePicture: "https://example.com/images/janedoe.jpg",
        followers: 890,
        following: 210,
        posts: 50
    },
    {
        username: "sarah_smith",
        fullName: "Sarah Smith",
        bio: "Fashion Blogger | Makeup Artist",
        profilePicture: "https://example.com/images/sarah_smith.jpg",
        followers: 3100,
        following: 300,
        posts: 110
    },
    {
        username: "mike_jones",
        fullName: "Mike Jones",
        bio: "Tech Geek | Gamer | Developer",
        profilePicture: "https://example.com/images/mike_jones.jpg",
        followers: 500,
        following: 150,
        posts: 20
    },
    {
        username: "emily_clark",
        fullName: "Emily Clark",
        bio: "Nature Lover | Yoga Instructor",
        profilePicture: "https://example.com/images/emily_clark.jpg",
        followers: 2300,
        following: 175,
        posts: 70
    },
    {
        username: "ryan_lee",
        fullName: "Ryan Lee",
        bio: "Music Producer | DJ",
        profilePicture: "https://example.com/images/ryan_lee.jpg",
        followers: 2700,
        following: 220,
        posts: 85
    },
    {
        username: "laura_white",
        fullName: "Laura White",
        bio: "Chef | Food Critic | Culinary Explorer",
        profilePicture: "https://example.com/images/laura_white.jpg",
        followers: 1600,
        following: 130,
        posts: 40
    },
    {
        username: "david_martin",
        fullName: "David Martin",
        bio: "Photographer | Adventurer",
        profilePicture: "https://example.com/images/david_martin.jpg",
        followers: 1900,
        following: 180,
        posts: 60
    },
    {
        username: "susan_lee",
        fullName: "Susan Lee",
        bio: "Author | Book Lover",
        profilePicture: "https://example.com/images/susan_lee.jpg",
        followers: 1500,
        following: 210,
        posts: 75
    },
    {
        username: "james_anderson",
        fullName: "James Anderson",
        bio: "Entrepreneur | Business Mentor",
        profilePicture: "https://example.com/images/james_anderson.jpg",
        followers: 3100,
        following: 350,
        posts: 20
    },
    {
        username: "linda_taylor",
        fullName: "Linda Taylor",
        bio: "Artist | Painter | Creative Soul",
        profilePicture: "https://example.com/images/linda_taylor.jpg",
        followers: 2200,
        following: 250,
        posts: 95
    },
    {
        username: "alex_martinez",
        fullName: "Alex Martinez",
        bio: "Tech Enthusiast | Blogger",
        profilePicture: "https://example.com/images/alex_martinez.jpg",
        followers: 1400,
        following: 170,
        posts: 30
    },
    {
        username: "nina_johnson",
        fullName: "Nina Johnson",
        bio: "Travel Blogger | Storyteller",
        profilePicture: "https://example.com/images/nina_johnson.jpg",
        followers: 3400,
        following: 280,
        posts: 125
    },
    {
        username: "samuel_roberts",
        fullName: "Samuel Roberts",
        bio: "Fitness Trainer | Motivational Speaker",
        profilePicture: "https://example.com/images/samuel_roberts.jpg",
        followers: 2000,
        following: 190,
        posts: 50
    },
    {
        username: "olivia_wilson",
        fullName: "Olivia Wilson",
        bio: "Designer | Creative Thinker",
        profilePicture: "https://example.com/images/olivia_wilson.jpg",
        followers: 2300,
        following: 270,
        posts: 80
    },
    {
        username: "chris_brown",
        fullName: "Chris Brown",
        bio: "Digital Marketer | SEO Expert",
        profilePicture: "https://example.com/images/chris_brown.jpg",
        followers: 950,
        following: 140,
        posts: 40
    },
    {
        username: "katy_adams",
        fullName: "Katy Adams",
        bio: "Singer | Songwriter",
        profilePicture: "https://example.com/images/katy_adams.jpg",
        followers: 2900,
        following: 220,
        posts: 100
    },
    {
        username: "jack_wilson",
        fullName: "Jack Wilson",
        bio: "Outdoor Enthusiast | Mountain Climber",
        profilePicture: "https://example.com/images/jack_wilson.jpg",
        followers: 1800,
        following: 200,
        posts: 45
    },
    {
        username: "natalie_harris",
        fullName: "Natalie Harris",
        bio: "Pet Lover | Animal Advocate",
        profilePicture: "https://example.com/images/natalie_harris.jpg",
        followers: 2500,
        following: 160,
        posts: 65
    },
    {
        username: "matthew_baker",
        fullName: "Matthew Baker",
        bio: "Graphic Designer | Creative Mind",
        profilePicture: "https://example.com/images/matthew_baker.jpg",
        followers: 1300,
        following: 190,
        posts: 55
    },
    {
        username: "hannah_carter",
        fullName: "Hannah Carter",
        bio: "Sustainable Living Advocate",
        profilePicture: "https://example.com/images/hannah_carter.jpg",
        followers: 1700,
        following: 220,
        posts: 60
    },
    {
        username: "benjamin_evans",
        fullName: "Benjamin Evans",
        bio: "Travel Guide | Cultural Enthusiast",
        profilePicture: "https://example.com/images/benjamin_evans.jpg",
        followers: 2100,
        following: 180,
        posts: 90
    },
    {
        username: "avery_wood",
        fullName: "Avery Wood",
        bio: "Social Media Strategist",
        profilePicture: "https://example.com/images/avery_wood.jpg",
        followers: 1600,
        following: 200,
        posts: 40
    },
    {
        username: "sophie_moore",
        fullName: "Sophie Moore",
        bio: "Dance Instructor | Choreographer",
        profilePicture: "https://example.com/images/sophie_moore.jpg",
        followers: 2300,
        following: 240,
        posts: 70
    },
    {
        username: "ryan_garcia",
        fullName: "Ryan Garcia",
        bio: "Chef | Recipe Developer",
        profilePicture: "https://example.com/images/ryan_garcia.jpg",
        followers: 1400,
        following: 160,
        posts: 85
    },
    {
        username: "lucas_wright",
        fullName: "Lucas Wright",
        bio: "Architect | Design Enthusiast",
        profilePicture: "https://example.com/images/lucas_wright.jpg",
        followers: 2200,
        following: 210,
        posts: 50
    },
    {
        username: "isabella_davis",
        fullName: "Isabella Davis",
        bio: "Makeup Artist | Beauty Blogger",
        profilePicture: "https://example.com/images/isabella_davis.jpg",
        followers: 2800,
        following: 270,
        posts: 90
    },
    {
        username: "michael_jones",
        fullName: "Michael Jones",
        bio: "Professional Athlete | Fitness Trainer",
        profilePicture: "https://example.com/images/michael_jones.jpg",
        followers: 3200,
        following: 220,
        posts: 110
    },
    {
        username: "olivia_brown",
        fullName: "Olivia Brown",
        bio: "Travel Photographer | Content Creator",
        profilePicture: "https://example.com/images/olivia_brown.jpg",
        followers: 2000,
        following: 180,
        posts: 95
    },
    {
        username: "nathan_hall",
        fullName: "Nathan Hall",
        bio: "Film Director | Storyteller",
        profilePicture: "https://example.com/images/olivia_brown.jpg",
        followers: 2000,
        following: 180,
        posts: 95
    }
]  