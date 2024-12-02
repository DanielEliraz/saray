'use client'

import { Layout } from '@wix/design-system';
import { CategoryItem, ItemProps } from './CategoryItem';
import { CATEGORIES } from '../constants';

interface Props {
  toHome: () => void;
  toCategoryPage: (items: ItemProps[]) => void;
}

export function CategoriesPage({toCategoryPage}: Props) {
  return (
    <>
      <Layout>
        {CATEGORIES.map((category) => (
          <CategoryItem
            key={category?.name}
            {...category}
            name={category?.name!}
            audio={category?.audio!}
            image={category?.image!}
            toCategoryPage={category?.items ? () => toCategoryPage(category.items) : undefined}
            backgroundColor="#90bdbf"
          />
        ))}
      </Layout>
    </>
  );
}
