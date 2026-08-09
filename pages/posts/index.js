import AllPosts from "@/components/posts/all-posts";

const DUMMY_DATA = [
    { 
        slug: 'getting-started-with-nextjs', 
        title: 'Getting started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.', 
        date: '2022-02-10',
    },
    { 
        slug: 'getting-started-with-nextjs2', 
        title: 'Getting started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.', 
        date: '2022-02-10',
    },
    { 
        slug: 'getting-started-with-nextjs3', 
        title: 'Getting started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.', 
        date: '2022-02-10',
    },
    { 
        slug: 'getting-started-with-nextjs4', 
        title: 'Getting started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.', 
        date: '2022-02-10',
    },
];

function AllPostsPage(params) {
    return(
        <AllPosts posts={DUMMY_DATA} />
    )
}

export default AllPostsPage