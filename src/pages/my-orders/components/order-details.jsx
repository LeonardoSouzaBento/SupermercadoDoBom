import { CheckCircle } from 'lucide-react';
import {
  ContainerSc,
  HeaderSc,
  HeaderInfoSc,
  BadgeSc,
  TotalsRowSc,
  AddressSc,
  CardSc,
  CardHeaderSc,
  CardContentSc,
  ItemSc,
  ItemImageSc,
  ItemDetailsSc,
  ItemGridSc,
  SubtotalSectionSc,
} from './ui/all';

const OrderDetails = ({ date, totalItems, deliveryAddress, items, subtotal, formatCurrency }) => {
  return (
    <ContainerSc>
      <HeaderSc>
        <HeaderInfoSc>
          <CheckCircle size={20} color="var(--success)" />
          <span>{date}</span>
        </HeaderInfoSc>

        <BadgeSc>COMPRA FINALIZADA</BadgeSc>

        <TotalsRowSc>
          <div>
            <div className="value">R$ {}</div>
            <div className="label">R$</div>
          </div>

          <div>
            <div className="value">{totalItems}</div>
            <div className="label">itens</div>
          </div>
        </TotalsRowSc>

        <AddressSc>
          <p>Endereço de entrega:</p>
          <p>{deliveryAddress}</p>
        </AddressSc>
      </HeaderSc>

      <CardSc>
        <CardHeaderSc>
          <h3>Lista de produtos</h3>
        </CardHeaderSc>
        <CardContentSc>
          {items.map((item) => (
            <ItemSc key={item.id}>
              <ItemImageSc>
                <img src={item.image} alt={item.name} />
              </ItemImageSc>
              <ItemDetailsSc>
                <h4>{item.name}</h4>
                <ItemGridSc>
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
                    <div className="subtotal">{formatCurrency(item.subtotal)}</div>
                  </div>
                </ItemGridSc>
              </ItemDetailsSc>
            </ItemSc>
          ))}
        </CardContentSc>
      </CardSc>

      <SubtotalSectionSc>
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </SubtotalSectionSc>
    </ContainerSc>
  );
};

export default OrderDetails;
