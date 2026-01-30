import BottomNavBar from '@components/bottom-nav-bar';
import styled from 'styled-components';

const DivSc = styled.div`
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PSc = styled.p`
  padding: 16px 24px;
  background-color: var(--white-foreground);
  border-radius: 12px;
  color: var(--dark-primary);
  box-shadow: var(--shadow-sm);
`;

const MyOrders = () => {
  return (
    <>
      <DivSc>
        <PSc>Essa página ainda não foi feita</PSc>
      </DivSc>
      <BottomNavBar />
    </>
  );
};

export default MyOrders;
