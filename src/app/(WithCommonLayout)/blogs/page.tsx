// components/BlogNewsPage.tsx
'use client';

import { useState, useEffect } from 'react';

// A function to simulate fetching blog posts from an API (replace this with a real API in the future)
const fetchArticles = async (category: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data.filter((article: any) => article.title.toLowerCase().includes(category.toLowerCase()));
};

const BlogNewsPage = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [category, setCategory] = useState<string>(''); // 'Educational Tips', 'Platform Updates', 'Industry News'

    // Fetch articles on component mount
    useEffect(() => {
        const getArticles = async () => {
            const fetchedArticles = await fetchArticles(category);
            setArticles(fetchedArticles);
        };
        getArticles();
    }, [category]);

    // Handle search input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Filter articles based on search query
    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">Blog & News</h1>

            {/* Search Bar */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search for articles..."
                    className="w-full p-3 border rounded-md"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Category Selection */}
            <div className="mb-8 text-center">
                <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-md mr-4"
                    onClick={() => setCategory('Educational Tips')}
                >
                    Educational Tips
                </button>
                <button
                    className="bg-green-500 text-white py-2 px-6 rounded-md mr-4"
                    onClick={() => setCategory('Platform Updates')}
                >
                    Platform Updates
                </button>
                <button
                    className="bg-purple-500 text-white py-2 px-6 rounded-md"
                    onClick={() => setCategory('Industry News')}
                >
                    Industry News
                </button>
            </div>

            {/* Articles Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article: any) => (
                        <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h2>
                            <p className="text-gray-600 mb-4">{article.body.slice(0, 150)}...</p>
                            <a href={`/blog/${article.id}`} className="text-blue-500 hover:text-blue-700">
                                Read more
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No articles found for this category or search query.</p>
                )}
            </div>
        </div>
    );
};

export default BlogNewsPage;
