'use client'

import {Box, Heading, Cell} from '@wix/design-system';
import Image from 'next/image';

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
  return (
    <Cell span={6}>
      <div onClick={() => {
        makeSound();
        toCategoryPage?.();
      }}>
        <Box direction="vertical" align="center" backgroundColor={backgroundColor} padding="20px" borderRadius="50%">
          <Box width="130px" height="100px" verticalAlign="middle">
            <Image width={130} height={100} src={`/${image}`} alt={image}/>
            {/* <img width="130px" height="100px" src={image} alt={image}/> */}
          </Box>
          <Heading size="medium">{name}</Heading>
        </Box>
      </div>
    </Cell>
  );
}
