import { flexCenter } from '@/styles/baseStyles';
import styled from 'styled-components';
import {
  CentralizeDiv
} from '../../GenericStylizedTags';


export const DivSpanCloseStyled = styled(CentralizeDiv)`
  width: 4rem;
  height: 4rem;
  margin-left: calc(100% - 48px);
  margin-bottom: -4.4rem;
  position: sticky;
  top: 0.8rem;
  right: -0.4rem;
  background-color: var(--bluish-white);
  color: var(--primary);
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;

  &:hover {
    background-color: var(--bluish-white-hover);
  }

  @media screen and (min-width: 578px) {
    height: 2.4rem;
    width: 4.8rem;
    padding: 0 1.2rem;
    padding-top: 1px;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    background-color: transparent;
    box-shadow: none;
    border-radius: 1.6rem;

    &:hover {
      box-shadow: var(--shadow-sm);
      background-color: transparent;
    }
  }

  & span:first-child {
    font-weight: 500;
    cursor: pointer;

    @media screen and (min-width: 578px) {
      display: none;
    }
  }
`;

export const ProductSectionStyled = styled.section`
  width: 100%;
  background-color: var(--white-foreground);
  box-sizing: border-box;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  z-index: 2;
  @media screen and (max-width: 375px) {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
  @media screen and (min-width: 430px) and (max-width: 577px) {
    padding: 0;
  }
  @media screen and (max-width: 577px) {
    z-index: 3;
    padding-bottom: 4rem;
    padding-top: 0.8rem;
    margin-bottom: 1.2rem;
  }
  @media screen and (min-width: 577px) {
    min-width: 32rem;
    max-width: 43rem;
    padding-bottom: 6rem;
    box-sizing: content-box;
    overflow-y: scroll;
  }
  @media screen and (min-width: 768px) {
    min-width: 41rem;
    padding: 0;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div:last-child {
    ${flexCenter}
    max-width: calc(100% - 32px);
    height: auto;
    gap: 0.8rem;
    margin: auto;
  }
`;