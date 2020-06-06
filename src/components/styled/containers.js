import styled from 'styled-components';
import welcome from '../../assets/img/1.png';

const MainContainer = styled.main`
    height: 90%;
    width: 100%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeDiv = styled.div`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    background-image: url(${welcome});
    background-size: 40% 40%;
    background-position: center center;
    background-repeat: no-repeat;
`;

const TasksDiv = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
`;

const DoneDiv = styled.div`
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
`;


export {
  MainContainer, HomeDiv, DoneDiv, TasksDiv 
};
