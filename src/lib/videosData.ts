import {
  SubAvatarImg1,
  SubAvatarImg2,
  SubAvatarImg3,
  SubAvatarImg4,
  SubAvatarImg5,
  SubAvatarImg6,
  SubAvatarImg7,
  ThumbnailDiscord,
  ThumbnailInstagram,
  ThumbnailNetflix,
  ThumbnailSpotify,
  ThumbnailTiktok,
  ThumbnailTwitter,
  ThumbnailYouTube,
} from "@/assets/images";
import { StaticImageData } from "next/image";

export type TVideoMockData = {
  fullName: string;
  thumbnail: StaticImageData;
  duration: string;
  avatar: StaticImageData;
  title: string;
  description: string;
  liked: string;
  disliked: string;
  subscribers: string;
  views: string;
  posted: string;
  datePosted: string;
  totalComments: string;
};

// VIDEOS MOCK DATA
export const videosMockData: TVideoMockData[] = [
  {
    thumbnail: ThumbnailYouTube,
    duration: "12:07",
    avatar: SubAvatarImg1,
    title: "A compilation of hilarious cat videos",
    fullName: "Cat Lover",
    views: "10k views",
    posted: "2 weeks ago",
    description:
      "Laughter is the best medicine, and this video is sure to cure your blues! Watch a purr-fectly funny compilation of cats doing what they do best - being adorable and clumsy. From hilarious falls to unexpected zoomies, this video will have you giggling from start to finish. Get ready for an overload of cuteness with this meow-gical compilation!",
    liked: "3.4k",
    disliked: "625",
    subscribers: "2.5M",
    datePosted: "Oct 8, 2021",
    totalComments: "23",
  },
  {
    thumbnail: ThumbnailInstagram,
    duration: "01:15",
    avatar: SubAvatarImg2,
    title: "Learn how to cook a delicious meal",
    fullName: "Chef John",
    views: "2.5k views",
    posted: "1 day ago",
    description:
      "Impress your friends and family with this easy-to-follow recipe from Chef John. In this short video, he'll guide you through the steps of creating a mouthwatering dish that's perfect for any occasion. With clear instructions and helpful tips, you'll be whipping up culinary masterpieces in no time! Don't miss out on Chef John's delicious secrets!",
    liked: "1.2k",
    disliked: "157",
    subscribers: "1.8M",
    datePosted: "June 26, 2024",
    totalComments: "424",
  },
  {
    thumbnail: ThumbnailTiktok,
    duration: "45:22",
    avatar: SubAvatarImg3,
    title: "Explore the beauty of Paris in this travel vlog",
    fullName: "Jane Doe",
    views: "780 views",
    posted: "3 days ago",
    description:
      "Join Jane Doe on a virtual tour of the City of Lights! This travel vlog takes you on a journey through the charming streets of Paris, showcasing iconic landmarks like the Eiffel Tower and the Louvre Museum. Experience the city's vibrant culture, delicious food, and breathtaking scenery from the comfort of your own home. Get ready to fall in love with Paris!",
    liked: "421",
    disliked: "32",
    subscribers: "78k",
    datePosted: "June 24, 2024",
    totalComments: "904",
  },
  {
    thumbnail: ThumbnailNetflix,
    duration: "08:31",
    avatar: SubAvatarImg4,
    title: "See the best moments from a recent gaming stream",
    fullName: "Gamer X",
    views: "123k views",
    posted: "1 month ago",
    description:
      "Relive the epic highlights from Gamer X's latest gaming stream! This action-packed compilation features the most intense battles, hilarious fails, and clutch wins. Get ready for an adrenaline rush as you witness Gamer X's skills in action. If you're looking for some entertaining gameplay moments, this video is for you!",
    liked: "18.2k",
    disliked: "1.4k",
    subscribers: "3.1M",
    datePosted: "May 27, 2024",
    totalComments: "2k",
  },
  {
    thumbnail: ThumbnailTwitter,
    duration: "10:02",
    avatar: SubAvatarImg5,
    title: "Follow a makeup tutorial for a perfect look",
    fullName: "Beauty Guru",
    views: "5.4k views",
    posted: "4 hours ago",
    description:
      "Achieve a flawless look with this step-by-step makeup tutorial from Beauty Guru. Learn how to apply foundation, eyeshadow, lipstick, and more, using easy-to-follow techniques and tips. This video is perfect for beginners and experienced makeup enthusiasts alike. Get ready to enhance your natural beauty with Beauty Guru's expert guidance!",
    liked: "2.1k",
    disliked: "128",
    subscribers: "820k",
    datePosted: "June 27, 2024",
    totalComments: "1.5k",
  },
  {
    thumbnail: ThumbnailSpotify,
    duration: "21:59",
    avatar: SubAvatarImg6,
    title: "Hear an honest review of a coding bootcamp",
    fullName: "Tech Learner",
    views: "87 views",
    posted: "1 week ago",
    description:
      "Thinking about enrolling in a coding bootcamp? Watch this video for an in-depth review from Tech Learner. They share their firsthand experience, covering the curriculum, instructors, and overall value of the program. This honest review will help you decide if a coding bootcamp is the right fit for you. Invest in your future and learn valuable coding skills!",
    liked: "47",
    disliked: "12",
    subscribers: "3.4k",
    datePosted: "June 20, 2024",
    totalComments: "234",
  },
  {
    thumbnail: ThumbnailDiscord,
    duration: "03:04",
    avatar: SubAvatarImg7,
    title: "Watch adorable dogs perform amazing tricks",
    fullName: "Doggo Lover",
    views: "3.1k views",
    posted: "6 days ago",
    description:
      "Get ready for a dose of cuteness overload! This video features a compilation of adorable dogs performing impressive tricks. From fetching and rolling over to jumping through hoops, these talented pups will melt your heart. Prepare to be amazed by the intelligence and trainability of man's best friend. Woof your way to happiness with this adorable video!",
    liked: "1.5k",
    disliked: "72",
    subscribers: "450k",
    datePosted: "June 21, 2024",
    totalComments: "534",
  },
  {
    thumbnail: ThumbnailYouTube,
    duration: "52:11",
    avatar: SubAvatarImg1,
    title: "Learn about the effects of climate change",
    fullName: "Earth Advocate",
    views: "1.2k views",
    posted: "2 months ago",
    description:
      "Climate change is one of the most pressing issues facing our planet today. This educational video from Earth Advocate explores the causes and effects of climate change, using clear explanations and visuals. Learn how human activities are impacting the environment and what we can do to create a more sustainable future. Take action and become an advocate for our planet!",
    liked: "327",
    disliked: "48",
    subscribers: "120k",
    datePosted: "April 24, 2024",
    totalComments: "935",
  },
  {
    thumbnail: ThumbnailInstagram,
    duration: "17:43",
    avatar: SubAvatarImg2,
    title: "Get a beginner-friendly workout routine",
    fullName: "Fitness Coach",
    views: "4.8k views",
    posted: "30 minutes ago",
    description:
      "Start your fitness journey on the right foot with this beginner-friendly workout routine from Fitness Coach. This video guides you through a series of exercises that are easy to follow and perfect for those new to working out. No gym membership required! Get fit and feel your best with Fitness Coach's expert guidance. Remember, consistency is key!",
    liked: "821",
    disliked: "97",
    subscribers: "1.5M",
    datePosted: "June 27, 2024",
    totalComments: "98",
  },
  {
    thumbnail: ThumbnailTiktok,
    duration: "00:58",
    avatar: SubAvatarImg3,
    title: "Folding clothes made easy with this life hack",
    fullName: "Marie Kondo Fan",
    views: "9.2k views",
    posted: "yesterday",
    description:
      "Tired of messy drawers and wrinkled clothes? Learn a simple life hack from Marie Kondo Fan that will revolutionize your laundry routine. This short video demonstrates a clever folding technique that saves space and keeps your clothes looking their best. Declutter your life and embrace organization with this easy-to-follow tip!",
    liked: "2.7k",
    disliked: "143",
    subscribers: "670k",
    datePosted: "June 26, 2024",
    totalComments: "32",
  },
  {
    thumbnail: ThumbnailNetflix,
    duration: "23:40",
    avatar: SubAvatarImg4,
    title: "In-depth review and analysis of a recent movie",
    fullName: "Film Critic",
    views: "2.7k views",
    posted: "1 hour ago",
    description:
      "Dive deep into the latest cinematic release with Film Critic's in-depth review and analysis. This video explores the film's plot, characters, directing, and cinematography, offering a critical perspective for cinephiles. Whether you loved the movie or hated it, this review will spark conversation and provide new insights. Enhance your movie watching experience with Film Critic's expert analysis!",
    liked: "987",
    disliked: "214",
    subscribers: "420k",
    datePosted: "June 27, 2024",
    totalComments: "3k",
  },
  {
    thumbnail: ThumbnailTwitter,
    duration: "04:12",
    avatar: SubAvatarImg5,
    title: "Get creative with DIY home decor ideas",
    fullName: "Crafty Kim",
    views: "15k views",
    posted: "last week",
    description:
      "Unleash your inner designer with these creative DIY home decor ideas from Crafty Kim. This video features a collection of easy-to-follow projects that will transform your living space on a budget. From repurposing old items to creating unique wall art, this video will inspire you to get crafty and personalize your home. Let your creativity flow and make your house a reflection of your style!",
    liked: "4.2k",
    disliked: "278",
    subscribers: "1.1M",
    datePosted: "June 20, 2024",
    totalComments: "455",
  },
  {
    thumbnail: ThumbnailSpotify,
    duration: "01:27",
    avatar: SubAvatarImg6,
    title: "Hilarious compilation of funny baby bloopers",
    fullName: "Proud Parent",
    views: "8.1k views",
    posted: "2 days ago",
    description:
      "Prepare for a meltdown of laughter with this compilation of hilarious baby bloopers! From messy mealtimes to epic falls, these precious moments capture the innocence and humor of babies. Witness the uncoordinated attempts at walking, talking, and eating that will leave you giggling uncontrollably. This video is a heartwarming reminder of the joy and wonder of parenthood!",
    liked: "2.9k",
    disliked: "104",
    subscribers: "720k",
    datePosted: "June 25, 2024",
    totalComments: "23",
  },
  {
    thumbnail: ThumbnailDiscord,
    duration: "07:52",
    avatar: SubAvatarImg7,
    title: "Learn tips and tricks for night sky photography",
    fullName: "Stargazer",
    views: "3.4k views",
    posted: "4 days ago",
    description:
      "Capture the beauty of the night sky with these helpful tips and tricks from Stargazer. This video equips you with the knowledge and techniques needed to take stunning astronomical photographs. Learn about camera settings, equipment recommendations, and essential post-processing techniques. Turn your passion for stargazing into breathtaking photography with Stargazer's expert guidance!",
    liked: "872",
    disliked: "91",
    subscribers: "210k",
    datePosted: "June 23, 2024",
    totalComments: "543",
  },
  {
    thumbnail: ThumbnailYouTube,
    duration: "28:14",
    avatar: SubAvatarImg1,
    title: "Find inner peace with a meditation guide for beginners",
    fullName: "Inner Peace",
    views: "1.9k views",
    posted: "3 weeks ago",
    description:
      "De-stress and find inner peace with this guided meditation for beginners from Inner Peace. This calming video provides a gentle introduction to meditation practices, leading you through a relaxing mindfulness session. Let go of your worries and achieve a state of tranquility with Inner Peace's soothing guidance. Meditation is a valuable tool for reducing anxiety, improving focus, and promoting overall well-being. Take a moment for yourself and begin your journey to inner peace!",
    liked: "421",
    disliked: "37",
    subscribers: "98k",
    datePosted: "June 6, 2024",
    totalComments: "953",
  },
  {
    thumbnail: ThumbnailInstagram,
    duration: "02:01",
    avatar: SubAvatarImg2,
    title: "Make a delicious and healthy smoothie in just minutes",
    fullName: "Healthy Chef",
    views: "11k views",
    posted: "12 hours ago",
    description:
      "Nourish your body with a quick and easy healthy smoothie recipe from Healthy Chef. This video features a delicious and nutritious blend that's packed with vitamins and antioxidants. Perfect for a busy morning or a post-workout snack, this smoothie will leave you feeling energized and satisfied. Learn how to incorporate fresh fruits, vegetables, and other healthy ingredients into your diet with Healthy Chef's simple recipes!",
    liked: "2.1k",
    disliked: "134",
    subscribers: "1.8M",
    datePosted: "June 27, 2024",
    totalComments: "5k",
  },
  {
    thumbnail: ThumbnailTiktok,
    duration: "05:39",
    avatar: SubAvatarImg3,
    title: "Test your coding skills with a React tutorial challenge",
    fullName: "Dev Master",
    views: "7.2k views",
    posted: "5 days ago",
    description:
      "Put your coding skills to the test with this React tutorial challenge from Dev Master. This video guides you through a practical coding exercise that reinforces your understanding of React concepts. Whether you're a beginner or an experienced developer, this challenge will help you improve your problem-solving skills and solidify your React knowledge. Take your coding journey to the next level with Dev Master's interactive tutorials!",
    liked: "1.4k",
    disliked: "87",
    subscribers: "520k",
    datePosted: "June 22, 2024",
    totalComments: "2.3k",
  },
  {
    thumbnail: ThumbnailNetflix,
    duration: "41:08",
    avatar: SubAvatarImg4,
    title: "Enjoy a live music performance from a talented band",
    fullName: "The Band",
    views: "2.1k views",
    posted: "2 days ago",
    description:
      "Experience the energy and excitement of a live music performance from The Band. This video captures a full concert setlist, showcasing the band's musical talent and stage presence. Immerse yourself in the music and relive the concert experience from the comfort of your home. Discover new music or revisit your favorite band with this electrifying performance!",
    liked: "582",
    disliked: "71",
    subscribers: "340k",
    datePosted: "June 25, 2024",
    totalComments: "243",
  },
  {
    thumbnail: ThumbnailTwitter,
    duration: "00:37",
    avatar: SubAvatarImg5,
    title: "Non-stop cuteness overload with cat meows and purrs",
    fullName: "Cat Whisperer",
    views: "14k views",
    posted: "8 hours ago",
    description:
      "Get ready for a purr-fectly adorable compilation of cat meows and purrs! This heartwarming video features a collection of cuddly cats expressing their affection through their vocalizations. Witness the soothing sounds of purring contentment and the playful chirps of curious kitties. This video is guaranteed to melt your heart and leave you wanting more feline friends!",
    liked: "4.1k",
    disliked: "182",
    subscribers: "1.3M",
    datePosted: "June 27, 2024",
    totalComments: "654",
  },
  {
    thumbnail: ThumbnailSpotify,
    duration: "19:22",
    avatar: SubAvatarImg6,
    title: "Explore the history of Rome in this documentary",
    fullName: "History Buff",
    views: "4.5k views",
    posted: "1 month ago",
    description:
      "Take a journey through time and explore the rich history of Rome in this captivating documentary from History Buff. This video delves into the rise and fall of the Roman Empire, exploring its cultural achievements, political figures, and architectural marvels. Learn about the events that shaped the Western world and gain a deeper appreciation for Roman civilization. Embark on an educational adventure and discover the legacy of Rome!",
    liked: "821",
    disliked: "102",
    subscribers: "270k",
    datePosted: "May 27, 2024",
    totalComments: "653",
  },
  {
    thumbnail: ThumbnailDiscord,
    duration: "06:13",
    avatar: SubAvatarImg7,
    title: "Take your first steps towards learning French",
    fullName: "Language Learner",
    views: "8.9k views",
    posted: "4 weeks ago",
    description:
      "Bonjour! Get ready to embark on your French learning adventure with Language Learner. This beginner-friendly video introduces you to basic French phrases and pronunciation tips. Learn how to greet others, ask simple questions, and understand everyday conversation. This is the first step to unlocking fluency in French. Follow Language Learner's engaging lessons and build your language skills with confidence!",
    liked: "1.7k",
    disliked: "84",
    subscribers: "610k",
    datePosted: "May 30, 2024",
    totalComments: "423",
  },
  {
    thumbnail: ThumbnailYouTube,
    duration: "35:47",
    avatar: SubAvatarImg1,
    title: "Embark on a virtual travel vlog through Tokyo",
    fullName: "Wanderlust",
    views: "1.7k views",
    posted: "3 days ago",
    description:
      "Explore the vibrant streets and iconic landmarks of Tokyo with Wanderlust in this virtual travel vlog. This immersive video takes you on a journey through bustling markets, serene temples, and breathtaking skyscrapers. Experience the unique culture, delicious food, and captivating energy of Tokyo without leaving your couch. Ignite your wanderlust and discover the magic of this unforgettable city!",
    liked: "382",
    disliked: "51",
    subscribers: "150k",
    datePosted: "June 24, 2024",
    totalComments: "657",
  },
  {
    thumbnail: ThumbnailInstagram,
    duration: "01:56",
    avatar: SubAvatarImg2,
    title: "Watch a compilation of hilarious dog fails",
    fullName: "Dog Lover 2",
    views: "10.3k views",
    posted: "yesterday",
    description:
      "Prepare to laugh out loud with this compilation of hilarious dog fails from Dog Lover 2. Witness clumsy canine attempts at fetching, epic zoomies gone wrong, and adorable derp moments. These playful pups will bring a smile to your face with their goofy antics and undeniable charm. Get ready for a dose of pure canine fun and celebrate the unconditional love of our furry friends!",
    liked: "3.2k",
    disliked: "178",
    subscribers: "910k",
    datePosted: "June 26, 2024",
    totalComments: "858",
  },
];

// COMMENTS
export const commentsMockData = [
  {
    name: "Sarah Lee",
    avatar: SubAvatarImg1,
    time: "2 days ago",
    comment: "Great video! Very informative.",
    liked: "32",
    disliked: "10",
  },
  {
    name: "David Kim",
    avatar: SubAvatarImg2,
    time: "1 hour ago",
    comment: "Hilarious! Can't wait for more.",
    liked: "52",
    disliked: "12",
  },
  {
    name: "Emily Johnson",
    avatar: SubAvatarImg3,
    time: "3 weeks ago",
    comment: "Beautiful scenery, thanks for sharing!",
    liked: "42",
    disliked: "1",
  },
  {
    name: "Michael Brown",
    avatar: SubAvatarImg4,
    time: "10 minutes ago",
    comment: "This is exactly what I needed, thanks!",
    liked: "75",
    disliked: "3",
  },
  {
    name: "Maria Garcia",
    avatar: SubAvatarImg5,
    time: "yesterday",
    comment: "Subscribed! Keep up the good work.",
    liked: "24",
    disliked: "3",
  },
  {
    name: "Noah Williams",
    avatar: SubAvatarImg6,
    time: "4 days ago",
    comment: "Confusing, needs better explanation.",
    liked: "3k",
    disliked: "100",
  },
  {
    name: "Olivia Jones",
    avatar: SubAvatarImg7,
    time: "1 week ago",
    comment: "Interesting concept, will try it out!",
    liked: "34",
    disliked: "9",
  },
  {
    name: "William Miller",
    avatar: SubAvatarImg1,
    time: "5 hours ago",
    comment: "Love the music, very relaxing.",
    liked: "64",
    disliked: "14",
  },
  {
    name: "Sophia Davis",
    avatar: SubAvatarImg2,
    time: "12 hours ago",
    comment: "So cute! Made my day.",
    liked: "11",
    disliked: "0",
  },
  {
    name: "Daniel Hernandez",
    avatar: SubAvatarImg3,
    time: "30 minutes ago",
    comment: "Really enjoyed this review, thanks.",
    liked: "35",
    disliked: "8",
  },
  {
    name: "Elizabeth Moore",
    avatar: SubAvatarImg4,
    time: "21 hours ago",
    comment: "Inspiring! Feeling motivated.",
    liked: "83",
    disliked: "17",
  },
  {
    name: "Benjamin Lewis",
    avatar: SubAvatarImg5,
    time: "6 days ago",
    comment: "A bit too long, could be shorter.",
    liked: "34",
    disliked: "1",
  },
  {
    name: "Isabella Garcia",
    avatar: SubAvatarImg6,
    time: "8 days ago",
    comment: "Looking forward to the next part!",
    liked: "93",
    disliked: "13",
  },
  {
    name: "Matthew Robinson",
    avatar: SubAvatarImg7,
    time: "1 day ago",
    comment: "Great tutorial, easy to follow.",
    liked: "300",
    disliked: "10",
  },
  {
    name: "Ashley Young",
    avatar: SubAvatarImg1,
    time: "5 days ago",
    comment: "Disappointed, not what I expected.",
    liked: "332",
    disliked: "12",
  },
  {
    name: "Christopher Clark",
    avatar: SubAvatarImg2,
    time: "2 hours ago",
    comment: "Learning so much, keep posting!",
    liked: "320",
    disliked: "19",
  },
  {
    name: "Catherine Walker",
    avatar: SubAvatarImg3,
    time: "4 weeks ago",
    comment: "Needs more practice, but funny overall.",
    liked: "43",
    disliked: "7",
  },
  {
    name: "Jacob Allen",
    avatar: SubAvatarImg4,
    time: "13 hours ago",
    comment: "Finally understand, thanks for explaining.",
    liked: "92",
    disliked: "9",
  },
  {
    name: "Abigail Thompson",
    avatar: SubAvatarImg5,
    time: "7 days ago",
    comment: "Would recommend this to a friend.",
    liked: "234",
    disliked: "9",
  },
];
