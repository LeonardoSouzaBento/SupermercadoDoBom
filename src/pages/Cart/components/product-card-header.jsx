import Button from '@ui/button';
import { CardHeader } from '@ui/card';
import { Trash2 } from 'lucide-react';
import { mdIcon } from '@/styles/lucideIcons';
import { Package } from 'lucide-react';
import React from 'react';

const ProductCardHeader = ({ setSeeCancelDialog }) => {
  return (
    <div>
      <CardHeader
        title="Produtos"
        icon={<Package size={20} strokeWidth={2.6} color="var(--primary)" />}
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
