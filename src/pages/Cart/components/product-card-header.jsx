import { Button } from '@ui/button';
import { CardHeader } from '@ui/card';
import { Trash2 } from 'lucide-react';
import { mdIcon } from '@/styles/lucideIcons';
import { Package } from 'lucide-react';
import React from 'react';
import { css } from 'styled-components';
import {MuiIcon} from '@ui/mui-icon';

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
        <Trash2 {...mdIcon} />
      </Button>
    </div>
  );
};

export default ProductCardHeader;
