import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import {
  CollectionPreviewContainer,
  CollectionTitle,
  PreviewItems
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <PreviewItems>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewItems>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
