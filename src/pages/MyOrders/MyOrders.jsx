import BottomNavBar from "@components/BottomNavBar/BottomNavBar";
import { CentralizeDiv } from "@components/GenericStylizedTags";
import styled from "styled-components";

const DivStyled = styled(CentralizeDiv)`
  width: 100%;
  height: calc(100vh - 56px);
`;

const PStyled = styled.p`
  padding: 16px 24px;
  background-color: var(--white-foreground);
  border-radius: 12px;
  color: var(--dark-primary);
  box-shadow: var(--shadow-xs);
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


