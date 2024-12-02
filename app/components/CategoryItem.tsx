'use client'

import {Box, Heading, Cell} from '@wix/design-system';
import Image from 'next/image';
import { useState } from 'react';

export interface ItemProps {
  name: string;
  audio: string;
  image: string;
}

interface Props extends ItemProps {
  toCategoryPage?: () => void;
  backgroundColor: string;
}

export function CategoryItem({name, audio, image, toCategoryPage, backgroundColor}: Props) {
  const makeSound = () => {
    const elm = new Audio(audio);
    elm.play();
  }

  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <Cell span={6}>
      <div onClick={() => {
        makeSound();
        setShowAnimation(true);
        setTimeout(() => {
          toCategoryPage?.();
        }, 1500)
      }}>
        <Box direction="vertical" align="center" backgroundColor={backgroundColor} padding="20px" borderRadius="50%" animation={showAnimation ? "blinker 0.5s linear" : ''}>
          <Box width="100%" height="12vh" verticalAlign="middle" position="relative">
            <Image fill src={`/${image}`} alt={image}/>
          </Box>
          <Heading size="medium">{name}</Heading>
        </Box>
      </div>
    </Cell>
  );
}
