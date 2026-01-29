import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Button } from '../ui/button';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    hsla(var(--primary-50), 0.3) 0%,
    hsla(var(--primary-100), 0.2) 50%,
    hsla(var(--primary-200), 0.1) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, hsla(var(--primary-300), 0.1) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const ErrorCode = styled.h1`
  font-size: clamp(80px, 20vw, 160px);
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    hsl(var(--primary-600)) 50%,
    var(--red-brand) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
  animation: ${float} 3s ease-in-out infinite;
  text-shadow: 0 10px 30px hsla(var(--primary-value), 0.2);
`;

const Title = styled.h2`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 700;
  color: var(--primary);
  margin: 20px 0 10px;
  font-family: var(--font-header);
`;

const Description = styled.p`
  font-size: var(--text-lg);
  color: var(--muted-foreground);
  margin-bottom: 30px;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const IconWrapper = styled.div`
  margin: 20px 0;
  animation: ${float} 4s ease-in-out infinite;
`;

const CartIcon = styled.svg`
  width: 120px;
  height: 120px;
  opacity: 0.6;
  filter: drop-shadow(0 10px 20px hsla(var(--primary-value), 0.15));
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      hsla(var(--primary-200), 0.2),
      hsla(var(--primary-300), 0.1)
    );
  }

  &::before {
    width: 400px;
    height: 400px;
    top: -200px;
    right: -100px;
    animation: ${float} 6s ease-in-out infinite;
  }

  &::after {
    width: 300px;
    height: 300px;
    bottom: -150px;
    left: -50px;
    animation: ${float} 7s ease-in-out infinite reverse;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <BackgroundShapes />
      <Content>
        <ErrorCode>404</ErrorCode>

        <IconWrapper>
          <CartIcon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--primary)' }}>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </CartIcon>
        </IconWrapper>

        <Title>Página Não Encontrada</Title>

        <Description>
          Ops! Parece que o produto que você procura não está mais disponível ou foi movido para
          outro corredor.
        </Description>

        <StyledLink to="/">
          <Button variant="primary" size="lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Voltar para Home
          </Button>
        </StyledLink>
      </Content>
    </Container>
  );
};

export default NotFound;

