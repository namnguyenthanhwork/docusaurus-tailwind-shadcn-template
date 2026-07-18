import clsx from 'clsx'
import { type ReactNode } from 'react'

import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client'

import type { Props } from '@theme/DocRoot/Layout/Main'

import styles from './styles.module.css'

export default function DocRootLayoutMain({ hiddenSidebarContainer, children }: Props): ReactNode {
  const sidebar = useDocsSidebar()
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced
      )}
    >
      <div
        className={clsx(
          'padding-top--md padding-bottom--lg container',
          'xl:px-10',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}
      </div>
    </main>
  )
}
