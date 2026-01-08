import styled from 'styled-components';

export const AnnouncementStyled = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 1.6rem;
  overflow-x: scroll;
  box-sizing: border-box;
  box-shadow: var(--shadow-lg);
  padding: 2.4rem;
  padding-top: 1.2rem;
  margin-bottom: 0.4rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1201px) {
    ${(props) => props.$odd && 'justify-content: center;'}
  }

  & > div {
    min-width: 22rem;
    width: 22rem;
    height: 22rem;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease;

    &:hover {
      scale: 1.01;
    }
    & > img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
      margin: auto;
      position: relative;
      -webkit-user-select: none;
      user-select: none;
    }
  }
`;
