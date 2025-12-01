import BottomNavBar from "@components/BottomNavBar/BottomNavBar";
import { CentralizeDiv } from "@components/GenericStylizedTags";
import styled from "styled-components";

const DivStyled = styled(CentralizeDiv)`
  width: 100%;
  height: calc(100vh - 56px);
`;

const PStyled = styled.p`
  padding: 16px 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.125);
  color: var(--dark-purple);
  font-weight: 400;
  font-size: 1.2em;
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

