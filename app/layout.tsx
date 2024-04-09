import Image from 'next/image';
import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { Nav } from './components/Nav';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </head>
        <body>
          <Nav />
          <main className={styles.main}>{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
