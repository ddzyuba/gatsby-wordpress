import * as React from "react";
import { graphql } from 'gatsby';
import PageWrapper from "../components/PageWrapper";
import RenderBlogList from '../components/RenderBlogList';
import FeaturedDestinations from "../components/FeaturedDestinations";

import {
  HomeHeroImg,
  HomeDescription,
  HomeDescriptionContainer,
  HomeDescriptionHeading,
  HomeDescriptionP,
  HomeRecentPosts,
  HomeRecentPostsHeading,
  HomeSignUp,
  HomeSignUpContainer,
  HomeSignUpHeading,
  HomeSignUpText,
  HomeSignUpForm,
  HomeSignUpLabel,
  HomeSignUpInputEmail,
  HomeSignUpInputSubmit
} from '../components/HomePage/HomePageStyles';

const IndexPage = ({ data }) => {
  const recentPosts = data.allWpPost.edges;
  return (
    <PageWrapper>
      <HomeHeroImg 
        src="https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5.webp" 
        sizes="(max-width: 2000px) 100vw, 2000px"
        srcSet="https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5.webp 2000w, https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5-300x113.webp 300w, https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5-1024x384.webp 1024w, https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5-768x288.webp 768w, https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5-1536x576.webp 1536w, https://we3travel.com/wp-content/uploads/2022/05/We3Travel_HeroImage-5-150x56.webp 150w"
      />
      <HomeDescription>
        <HomeDescriptionContainer>
          <HomeDescriptionHeading>Welcome to WE3TRAVEL®</HomeDescriptionHeading>
          <HomeDescriptionP>Hi! I’m Tamara and I believe that you shouldn’t just <em>take</em> a vacation, you should <em>experience</em> it. I love experiencing a destination through its food, culture, history, and outdoor adventures. You will find me traveling the world or exploring nearby New England, both on my own and with my family. &nbsp;</HomeDescriptionP>
          <HomeDescriptionP>You may find us star gazing in national parks, taking a cooking class in Marrakech, learning about history in Europe, or sometimes even relaxing at a luxury hotel. I started this travel blog to help take the pain out of planning your next vacation so you can spend more time creating happy memories.</HomeDescriptionP>
        </HomeDescriptionContainer>
      </HomeDescription>
      <HomeRecentPosts>
        <HomeRecentPostsHeading>Recent Posts</HomeRecentPostsHeading>
        <RenderBlogList edges={recentPosts} />
      </HomeRecentPosts>
      <HomeSignUp>
        <HomeSignUpContainer>
          <HomeSignUpHeading>SIGN UP FOR OUR NEWSLETTER & <br />RECEIVE A FAMILY VACATION PLANNING KIT!</HomeSignUpHeading>
          <HomeSignUpText>We3Travel.com will use this information to send you newsletters. You can unsubscribe at any time by clicking the unsubscribe link or by contacting tamara@we3travel.com. By clicking below, you agree that we may process your information in accordance with these terms.</HomeSignUpText>
          <HomeSignUpForm>
            <HomeSignUpLabel htmlFor="email">Your email</HomeSignUpLabel>
            <HomeSignUpInputEmail type="email" name="email" id="email" placeholder="Email" />
            <HomeSignUpInputSubmit type="submit" value="Submit" />
          </HomeSignUpForm>
        </HomeSignUpContainer>
      </HomeSignUp>
      <FeaturedDestinations />
    </PageWrapper>
  );
}

export default IndexPage

export const HomeRecentPostsQuery = graphql`
  query HomeRecentPostsQuery {
    allWpPost(limit: 6, sort: {fields: date, order: DESC}) {
      edges {
        node {
          title
          slug
          databaseId
        }
      }
    }
  }`;
