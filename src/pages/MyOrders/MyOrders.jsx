import BottomNavBar from '@components/BottomNavBar';
import styled from 'styled-components';

const DivStyled = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PStyled = styled.p`
  padding: 1.6rem 2.4rem;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
  color: var(--dark-primary);
  box-shadow: var(--shadow-sm);
`;

const MyOrders = () => {
  return (
    <>
      <DivStyled>
        <PStyled>Essa página ainda não foi feita</PStyled>
      </DivStyled>
      <BottomNavBar />
    </>
  );
};

export default MyOrders;
