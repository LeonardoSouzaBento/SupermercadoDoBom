import { Button } from '@ui/button';
import { CardHeader } from '@ui/card';
import { Icon } from '@ui/index';
import { MuiIcon } from '@ui/mui-icon';
import { Trash2 } from 'lucide-react';
import { css } from 'styled-components';

const ProductCardHeader = ({ setSeeCancelDialog }) => {
  return (
    <div>
      <CardHeader
        title="Produtos"
        icon={<MuiIcon icon="package_2" size="h3" />}
        customStyles={css`
          padding-left: 20px;
        `}
      />

      <Button
        id="delete-button"
        variant="destructive"
        size="icon"
        onClick={() => {
          setSeeCancelDialog(true);
        }}>
        <Icon LucideIcon={Trash2} />
      </Button>
    </div>
  );
};

export default ProductCardHeader;
