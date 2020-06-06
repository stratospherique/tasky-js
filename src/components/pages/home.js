import React from 'react';
import { HomeDiv } from '../styled/containers';
import { Heading } from '../styled/styledParts';

const Home = () => (
    <HomeDiv>
        <Heading 
            type="primary"
            color="#777A87">
            Welcome Stranger
        </Heading>
        <Heading 
            type="secondary"
            color="#777A87"
            >
            Any Tasks for today
        </Heading>
    </HomeDiv>
)

export default Home;
