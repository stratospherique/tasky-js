import React from 'react';
import { HomeDiv } from '../styled/containers';
import { Heading } from '../styled/styledParts';

const Home = () => (
    <HomeDiv>
        <Heading type="primary">
            Welcome Stranger
        </Heading>
        <Heading type="secondary">
            Any Tasks for today
        </Heading>
    </HomeDiv>
)

export default Home;
