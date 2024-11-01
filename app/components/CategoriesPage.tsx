'use client'

import {Box, Heading, Layout, Cell, Card, Image, TextButton, AudioPlayer} from '@wix/design-system';
import { CategoryItem, ItemProps } from './CategoryItem';
import { CATEGORIES } from '../constants';

interface Props {
  toHome: () => void;
  toCategoryPage: (items: ItemProps[]) => void;
}

export function CategoriesPage({toHome, toCategoryPage}: Props) {
  return (
    <main style={{direction: 'rtl', padding: '10px'}}>
      <Layout>
        {CATEGORIES.map((category) => (
          <CategoryItem
            key={category.name}
            {...category}
            toCategoryPage={category.items ? () => toCategoryPage(category.items) : undefined}
            backgroundColor="#90bdbf"
          />
        ))}
      </Layout>
    </main>
  );
}
