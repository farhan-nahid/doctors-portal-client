import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Rashed from '../../../images/Aliza.png';
import Cudi from '../../../images/Gomez.png';
import Winson from '../../../images/Winson.png';
import SingleBlog from '../SingleBlog/SingleBlog';

const blogData = [
    {
        id:1,
        img:Rashed,
        name:' Rashed Kabir ',
        date:'22 Aug 2019',
        title:'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam reprehenderit expedita vero blanditiis libero aut repellat eos asperiores ab.'
    },
    {
        id:2,
        img:Cudi,
        name:'Dr. Cudi',
        date:'23 April 2019',
        title:'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam reprehenderit expedita vero blanditiis libero aut repellat eos asperiores ab.'
    },
    {
        id:3,
        img:Winson,
        name:'Dr. Winson',
        date:'22 Aug 2019',
        title:'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quibusdam reprehenderit expedita vero blanditiis libero aut repellat eos asperiores ab.'
    },
]

const Blog = () => {
    return (
        <Container className="mt-5 pt-5 ">
            <h6 style={{color:"#17d2bd"}} className="text-center">Our Blog</h6>
            <h1 className="text-center title">From Our Blog News</h1>
                <Row className="mt-5">
                    {
                        blogData.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                    }
                </Row>
        </Container>
    );
};

export default Blog;