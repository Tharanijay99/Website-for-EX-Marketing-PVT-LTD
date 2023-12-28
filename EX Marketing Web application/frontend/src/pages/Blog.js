import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import{getAllBlogs} from "../features/blogs/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const Blog = () => {
  const blogState=useSelector((state)=>state.blog.blog);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllBlogs());
  }, []);
  const getblogs =() =>{
    dispatch(getAllBlogs());
  };
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
         
          <div className="col-xxl-12">
            <div className="row">
              {blogState &&
                blogState?.map((blog,index)=>{
                  return(<div className="col-xxl-3 mt-3" key={index}>
                  <BlogCard id={blog._id}
        title={blog.title}
        description={blog.description}
        image={blog.image}
                  date={moment((blog?.createdAt)).format('MMMM Do YYYY, h:mm: a')}/>
                </div>
                );
                })
              }
              
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;


