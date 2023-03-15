import { useRouter } from 'next/router'
import React from 'react'

const BlogCard = () => {
    const router = useRouter()
    return (
        <div className="blogcard">
            <div className="cardcontent">
                <h2>Why Everyone Should Have a Website</h2>
                <p>In today&apos;s digital age, a website is an essential tool for anyone who wants to be successful in business. A well-designed website can help <span
                    onClick={() => router.push('/blog/1')}>...continue reading</span></p>
                <div className='details'>
                    <p className="author">
                        Author: Peter Parker
                    </p>
                    <p className="date">
                        Posted on: 6/3/2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard