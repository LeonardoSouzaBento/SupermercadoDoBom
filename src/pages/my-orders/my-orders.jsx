import { flexCenter } from '@/css/baseStyles';
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

const LogoSc = styled.div`
  width: 72px;
  height: 72px;
  ${flexCenter};
  background-image: linear-gradient(135deg, var(--red-brand), #B50016);
  border-radius: 12px;
  color: var(--white-foreground);
  font-size: 52px;
  margin-left: 12px;
  font-weight: 600;
`;

const MyOrders = () => {
  return (
    <>
      <DivSc>
        <PSc>Essa página ainda não foi feita</PSc>
      </DivSc>
      <LogoSc>
        B
      </LogoSc>
      <BottomNavBar />
    </>
  );
};

export default MyOrders;
