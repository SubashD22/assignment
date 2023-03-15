import BlogCard from '../../components/BlogCard'
import React from 'react'

const Blog = () => {
    return (
        <div className="blogposts">
            <h1>Blog Posts</h1>
            <div className="posts">
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog