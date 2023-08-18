import React from 'react';
import Container from '../components/Container';
import Typography from '../components/Typography';
import MobileHeader from '../components/MobileHeader';
import data from '../data/profileData.json';
import styled from '@emotion/styled';

const RowWrapper = styled.div`
  border-bottom: 2px solid #f0f0f0ad;
  padding: 14px;
  width: 90%;
  cursor: pointer;
`


const Blog: React.FC = () => {
  const blogs = data.blog;
  return (
    <React.Fragment>
      <MobileHeader />
      <Container id='blog' verticalLineUp>
        <Typography color='#45826C' underline style={{marginTop: '3%', marginBottom: '3%'}}>Blog</Typography>
          {blogs.map((blog) => {
            return (
              <RowWrapper>
                <Typography style={{cursor: 'pointer'}}>{blog.title}</Typography>
                <Typography style={{cursor: 'pointer'}} fontSize='10px' color='#959a99'>{blog.description}</Typography>
              </RowWrapper>
            )
          })};
      </Container>
    </React.Fragment>
  );
};

export default Blog;
