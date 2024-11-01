'use client'

import { useState } from 'react';
import { Home } from './components/Home';
import { CategoriesPage } from './components/CategoriesPage';
import { CategoryPage } from './components/CategoryPage';
import { ItemProps } from './components/CategoryItem';

const STAGES = {
  HOME: 'HOME',
  CATEGORIES: 'CATEGORIES',
  CATEGORY: 'CATEGORY',
}

export default function Page() {
  const [stage, setStage] = useState<keyof typeof STAGES>('HOME');
  const [items, setItems] = useState<ItemProps[] | undefined>();
  
  switch(stage) {
    case 'HOME':
      return <Home nextPage={() => setStage('CATEGORIES')}/>;
    case 'CATEGORIES':
      return <CategoriesPage toHome={() => setStage('HOME')} toCategoryPage={(items: ItemProps[]) => {
        setItems(items);
        setStage('CATEGORY');
      }} />
    case 'CATEGORY':
      return <CategoryPage items={items!} toCategories={() => {
        setItems(undefined);
        setStage('CATEGORIES');
      }}/>
    default:
      return <Home nextPage={() => setStage('CATEGORIES')}/>;
  }
}
