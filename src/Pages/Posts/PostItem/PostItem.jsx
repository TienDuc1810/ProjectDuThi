import { Button } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import contents from './Content.json';
import './PostItem.scss';

const PostItem = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const posts = contents.Content;

    return (
        <>
            {/* post-news */}
            <div className="posts-new">
                <div className="posts-new-main" data-aos="fade-right">
                    <img src={posts[0].img} alt="" />
                    <h2 className='post-title'>{posts[0].Title}</h2>
                    <i className='post-info'>{posts[0].info}</i>
                    <p className="post-desc">{posts[0].content}</p>
                    <Button type="primary" className='post-btn'>Read more</Button>
                </div>
                <div className="posts-new-list" data-aos="fade-left">
                    <div className="posts-new-list-item">
                        <img src={posts[1].img} alt="" />
                        <i className='post-info'>{posts[1].info}</i>
                        <h2 className='post-title'>{posts[1].Title}</h2>
                    </div>
                    <div className="posts-new-list-item">
                        <img src={posts[2].img} alt="" />
                        <i className='post-info'>{posts[2].info}</i>
                        <h2 className='post-title'>{posts[2].Title}</h2>
                    </div>
                </div>
            </div>
            <hr className='hr-posts' />
            {/* posts */}
            <div className='posts'>
                {posts.map((post, key) => {
                    return (
                        <div key={key} className='post-item' data-aos="fade-right">
                            <div className="post-img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="post-content" data-aos="fade-left">
                                <h2 className='post-title'>{post.Title}</h2>
                                <i className='post-info'>{post.info}</i>
                                <p className="post-desc">{post.content}</p>
                                <Button classNames={'btnn'} type="primary" className='post-btn'>Read more</Button>
                            </div>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default PostItem;