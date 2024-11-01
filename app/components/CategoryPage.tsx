'use client'

import {Box, Layout, Image} from '@wix/design-system';
import { CategoryItem, ItemProps } from './CategoryItem';

interface Props {
  toCategories: () => void;
  items:  ItemProps[];
}

export function CategoryPage({toCategories, items}: Props) {
  return (
    <main style={{direction: 'rtl'}}>
      <Box height="100px">
        <Image width="auto" height="100%" src="to-home.png" alt="to-home" onClick={toCategories} />
      </Box>
      <Layout>
        {items.map((item) => (
          <CategoryItem key={item.name} {...item} backgroundColor="#f9f7bf"/>
        ))}
      </Layout>
    </main>
  );
}
