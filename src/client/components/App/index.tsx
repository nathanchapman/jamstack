import React from 'react';
import styled from 'styled-components';
import { useHelloQuery } from '../../codegen';
import jamIcon from '../../images/icons8-jam.png';
import githubIcon from '../../images/github-logo-white.png';

const App = styled.div`
  font-size: 1.25em;
  text-align: center;
  width: 60%;
  margin: 50px auto 0px auto;
`;

const Loading = styled.div`
  margin: 10px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Image = styled.img`
  filter: drop-shadow(3px 3px 3px #c2185a); 
  &:hover {
    filter: drop-shadow(4px 4px 4px #c2185a); 
  }
`;

const Title = styled.h1`
  font-size: 4em;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ffffff;
  font-family: 'Knewave', cursive;
  text-shadow: 3px 3px #c2185a;
  &:hover {
    text-shadow: 4px 4px #c2185a;
  }
`;

const Greeting = styled.h3`
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 30px;
  text-shadow: 2px 2px #c2185a;
  &:hover {
    text-shadow: 3px 3px #c2185a;
  }
`;

export default () => {
  const { data, loading, error } = useHelloQuery();

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <div>oops: {error.message}</div>;
  }

  return (
    <App>
      <Link href="https://icons8.com/icons/set/jam" target="_blank">
        <Image title="Jam icon by Icons8" src={jamIcon} />
      </Link>
      <Link href="https://jamstack.org" target="_blank">
        <Title>JAMSTACK</Title>
      </Link>
      <Link href="https://www.netlify.com/products/functions/" target="_blank">
        <Greeting>{data?.hello}</Greeting>
      </Link>
      <Link href="https://github.com/nathanchapman/jamstack" target="_blank">
        <Image title="jamstack on GitHub" src={githubIcon} style={{width: '48px'}} />
      </Link>
    </App>
  );
};
