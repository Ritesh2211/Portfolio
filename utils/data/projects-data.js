import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';


export const projectsData = [
    {
        id: 1,
        name: 'Crypto-Dhan Web App ',
        description: " The app enhanced the user experience by offering a  intuitive interface, allowing users to easily navigate through cryptocurrency data and make informed decisions. Conducted testing, debugging, and deployment to ensure high-quality delivery.Through features like trending and saved, the app facilitated efficient analysis of cryptocurrency data, enablingusers to quickly identify promising investment opportunities or track market trends.",
        tools: ['React', 'Tailwindcss', 'CoinGeko API', ],
        role: 'Full Stack Developer',
        livePreview: 'https://crypto-dhan.vercel.app/', // Add your project demo link here   
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Budget-Tracker ',
        description: 'Designed and implemented the MongoDB database schema to store user budget data securely. Implemented RESTful API endpoints using Node.js and Express.js for handling CRUD (Create, Read, Update, Delete) operations for budget items. Created a responsive and intuitive user interface using React.js, allowing users to efficiently manage theirbudgets on various devices.',
        tools: ['React', 'MongoDB', "NodeJS", "ExperessJS"],
        role: 'Full Stack Developer',
        code: '',
        livePreview: 'https://ritesh2211.github.io/Budget-Tracker/', // Add your project demo link here   
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Github-Hunter', 
        description: 'GitHub Hunter is a sleek and efficient web application designed to help users effortlessly find and explore GitHub profiles. This application features a powerful search functionality that allows users to quickly look up GitHub usernames and view detailed profile information, including repositories, followers, and activity stats. Whether you are a developer looking for inspiration or someone curious about GitHub users.',
        tools: ['React', 'React', 'NextJS', 'Chakra UI'],
        code: '',
        livePreview: 'https://github-hunter.vercel.app/', // Add your project demo link here 
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Personal Bookshelf',
        description: "About Book Search: Users can search for books by title, author, or ISBN using the Open Library API. Add to Bookshelf: Users can add books to their personal bookshelf. Remove from Bookshelf: Users can remove books from their bookshelf. Responsive Design: The application is responsive and works well on both desktop and mobile device.",
        tools: ['React', 'Tailwind CSS', 'Open Library API'],
        code: '',
        livePreview: 'https://personal-bookshelf-main.vercel.app/', // Add your project demo link here 
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },