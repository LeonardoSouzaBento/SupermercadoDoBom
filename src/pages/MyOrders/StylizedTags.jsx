import styled from "styled-components";

//Order Details
export const ContainerStyled = styled.div`
  max-width: 28rem; /* equivalente a max-w-md */
  margin: 0 auto;
  background: var(--background);
  min-height: 100vh;
`;

export const HeaderStyled = styled.div`
  background: var(--order-header);
  padding: 1.5rem;
  text-align: center;
`;

export const HeaderInfoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }
`;

export const BadgeStyled = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--success);
  background: var(--success);
  color: var(--success-foreground);
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const TotalsRowStyled = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  div {
    text-align: center;

    .value {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--price-highlight);
    }

    .label {
      font-size: 0.875rem;
      color: var(--muted-foreground);
    }
  }
`;

export const AddressStyled = styled.div`
  text-align: left;

  p {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
    line-height: 1.5;
  }

  p:first-child {
    color: var(--muted-foreground);
  }

  p:last-child {
    font-weight: 500;
    color: var(--foreground);
  }
`;

export const CardStyled = styled.div`
  border: none;
  border-radius: 0;
  box-shadow: none;
  margin-top: 1rem;
`;

export const CardHeaderStyled = styled.div`
  padding-bottom: 0.75rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--foreground);
  }
`;

export const CardContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemStyled = styled.div`
  background: var(--order-item);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  gap: 0.75rem;
`;

export const ItemImageStyled = styled.div`
  width: 4rem;
  height: 4rem;
  background: var(--muted);
  border-radius: 0.375rem;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemDetailsStyled = styled.div`
  flex: 1;
  min-width: 0;

  h4 {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--foreground);
    margin-bottom: 0.75rem;
    line-height: 1.25;
  }
`;

export const ItemGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  font-size: 0.75rem;

  div {
    text-align: center;

    .label {
      color: var(--muted-foreground);
      margin-bottom: 0.25rem;
    }

    .quantity {
      background: var(--quantity-bg);
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      font-weight: 500;
      color: var(--foreground);
    }

    .unit {
      font-weight: 500;
      color: var(--foreground);
    }

    .subtotal {
      font-weight: 600;
      color: var(--price-highlight);
    }
  }
`;

export const SubtotalSectionStyled = styled.div`
  background: var(--order-header);
  padding: 1.5rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--foreground);
  }

  span:last-child {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--price-highlight);
  }
`;

//OrderCard
export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  max-width: 400px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const DateTag = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 16px;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
  letter-spacing: 0.5px;
`;

export const StatusBadge = styled.div`
  color: #22c55e;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 12px;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
`;

export const ItemCount = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
`;

export const ItemsList = styled.div`
  margin-bottom: 20px;
`;

export const ItemRow = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;

export const DetailsButton = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #e5e7eb;
  color: #374151;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    background: #f8faff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

