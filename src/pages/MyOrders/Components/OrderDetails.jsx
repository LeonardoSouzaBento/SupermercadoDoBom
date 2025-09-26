import { CheckCircle } from "lucide-react";
import {
  ContainerStyled,
  HeaderStyled,
  HeaderInfoStyled,
  BadgeStyled,
  TotalsRowStyled,
  AddressStyled,
  CardStyled,
  CardHeaderStyled,
  CardContentStyled,
  ItemStyled,
  ItemImageStyled,
  ItemDetailsStyled,
  ItemGridStyled,
  SubtotalSectionStyled,
} from "../MyOrders";

const OrderDetails = ({
  date,
  totalItems,
  deliveryAddress,
  items,
  subtotal,
  formatCurrency,
}) => {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <HeaderInfoStyled>
          <CheckCircle size={20} color="var(--success)" />
          <span>
            {date}
          </span>
        </HeaderInfoStyled>

        <BadgeStyled>COMPRA FINALIZADA</BadgeStyled>

        <TotalsRowStyled>
          <div>
            <div className="value">
              R$ {}
            </div>
            <div className="label">R$</div>
          </div>

          <div>
            <div className="value">{totalItems}</div>
            <div className="label">itens</div>
          </div>
        </TotalsRowStyled>

        <AddressStyled>
          <p>Endereço de entrega:</p>
          <p>{deliveryAddress}</p>
        </AddressStyled>
      </HeaderStyled>

      <CardStyled>
        <CardHeaderStyled>
          <h3>Lista de produtos</h3>
        </CardHeaderStyled>
        <CardContentStyled>
          {items.map((item) => (
            <ItemStyled key={item.id}>
              <ItemImageStyled>
                <img src={item.image} alt={item.name} />
              </ItemImageStyled>
              <ItemDetailsStyled>
                <h4>{item.name}</h4>
                <ItemGridStyled>
                  <div>
                    <div className="label">Qtd.</div>
                    <div className="quantity">{item.quantity}</div>
                  </div>
                  <div>
                    <div className="label">Preço un</div>
                    <div className="unit">{formatCurrency(item.unitPrice)}</div>
                  </div>
                  <div>
                    <div className="label">Subtotal</div>
                    <div className="subtotal">
                      {formatCurrency(item.subtotal)}
                    </div>
                  </div>
                </ItemGridStyled>
              </ItemDetailsStyled>
            </ItemStyled>
          ))}
        </CardContentStyled>
      </CardStyled>

      <SubtotalSectionStyled>
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </SubtotalSectionStyled>
    </ContainerStyled>
  );
};

export default OrderDetails;
