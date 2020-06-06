import styled from 'styled-components';
import welcome from '../../assets/img/1.png';

const MainContainer = styled.main`
    height: 90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    padding-left: 6rem;
    background-image: url(${welcome});
    background-size: contain contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

const TasksDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    padding-left: 6rem;
`;

const DoneDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
    padding-left: 6rem;
`;


export {
  MainContainer, HomeDiv, DoneDiv, TasksDiv 
};
