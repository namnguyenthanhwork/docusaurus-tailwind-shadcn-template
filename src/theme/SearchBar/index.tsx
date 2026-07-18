// @ts-ignore
import '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js'
import type { ReactNode } from 'react'

import { DocsPreferredVersionContextProvider } from '@docusaurus/plugin-content-docs/client'

import SearchBar from './SearchBar'

export default function SearchBarWrapper(props: Record<string, unknown>): ReactNode {
  return (
    <DocsPreferredVersionContextProvider>
      <SearchBar {...props} />
    </DocsPreferredVersionContextProvider>
  )
}
