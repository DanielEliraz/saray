'use client'

import {Box, Heading, Layout, Cell, Card, Image, TextButton, AudioPlayer} from '@wix/design-system';

interface Props {
  nextPage: () => void;
}

export function Home({nextPage}: Props) {
  const name = "איתי"
  const place = "פארק בן דור"
  return (
    <main style={{direction: 'rtl'}}>
        <Box direction="vertical" align="center" width="100%" paddingTop={10} minHeight="100vh" paddingLeft={10} paddingRight={10}>
          <Box direction="vertical" align="center" paddingBottom={5}>
            <Heading>
              שלום {name} ;)
            </Heading>
            <Heading>
              ברוך הבא
            </Heading>
            <Heading>
              ל{place}
            </Heading>
            <Heading>
              מה תרצה לעשות?
            </Heading>
            <Box paddingTop={5}>
              <Image src="ben-dor.png" alt="ben-dor" />
            </Box>
            <Box paddingTop={10}>
              <Image src="enter-arrow.png" alt="enter-arrow" onClick={() => nextPage()}/>
            </Box>
          </Box>
        </Box>
    </main>
  );
}
