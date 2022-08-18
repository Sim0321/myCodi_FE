import React from "react";
import styled from "styled-components";
// import PostCard from "../components/home/PostCard";
import PostsList from "../components/home/PostsList";
import GlobalLayout from "../global/GlobalLayout";
import { useSelector } from "react-redux";

const HomePage = () => {

  
  return (
    <GlobalLayout>
      <StContainer>
        <h1>NEW</h1>
        {/* {posts.length > 8 ? (
          <>
            <PostsList posts={posts} />
            <button>더 보기</button>
          </>
        ) : (
          <PostsList posts={posts} />
        )} */}
        <PostsList />
      </StContainer>
      <hr style={{ borderColor: "#094067" }} />
      <StContainer>
        <h1>HOT</h1>
        {/* <PostsList /> */}
      </StContainer>
    </GlobalLayout>
  );
};

export default HomePage;

const StContainer = styled.div`
  width: 100%;
  /* background-color: #fff; */
  color: #094067;
`;
