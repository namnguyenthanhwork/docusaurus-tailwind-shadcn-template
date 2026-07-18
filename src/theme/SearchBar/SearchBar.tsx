import {
  matchesKeymap,
  parseKeymap
  // @ts-ignore
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/keymap.js'
// @ts-ignore
import {
  docsPluginIdForPreferredVersion,
  hideSearchBarWithNoSearchContext,
  searchBarShortcut,
  searchBarShortcutKeymap,
  searchContextByPaths
  // @ts-ignore
} from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js'
import { Search } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client'
import { useLocation } from '@docusaurus/router'
import { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useIsBrowser from '@docusaurus/useIsBrowser'

import { SearchModal } from './SearchModal'

interface SearchBarProps {
  handleSearchBarToggle?: (open: boolean) => void
}

export default function SearchBar({ handleSearchBarToggle }: SearchBarProps) {
  const isBrowser = useIsBrowser()
  const {
    siteConfig: { baseUrl }
  } = useDocusaurusContext()

  const activePlugin = useActivePlugin()
  let versionUrl = baseUrl
  const activeVersion = useActiveVersion(activePlugin?.pluginId ?? docsPluginIdForPreferredVersion)
  if (activeVersion && !activeVersion.isLast) {
    versionUrl = activeVersion.path + '/'
  }

  const location = useLocation()
  const [searchContext, setSearchContext] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!Array.isArray(searchContextByPaths)) return
    let nextSearchContext = ''
    if (location.pathname.startsWith(versionUrl)) {
      const uri = location.pathname.substring(versionUrl.length)
      for (const _path of searchContextByPaths) {
        const path = typeof _path === 'string' ? _path : _path.path
        if (uri === path || uri.startsWith(`${path}/`)) {
          nextSearchContext = path
          break
        }
      }
    }
    setSearchContext(nextSearchContext)
  }, [location.pathname, versionUrl])

  const hidden =
    !!hideSearchBarWithNoSearchContext &&
    Array.isArray(searchContextByPaths) &&
    searchContext === ''

  const openModal = useCallback(() => {
    setOpen(true)
    handleSearchBarToggle?.(true)
  }, [handleSearchBarToggle])

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setOpen(value)
      if (!value) handleSearchBarToggle?.(false)
    },
    [handleSearchBarToggle]
  )

  useEffect(() => {
    if (!isBrowser || !searchBarShortcut || !searchBarShortcutKeymap) return
    const parsedKeymap = parseKeymap(searchBarShortcutKeymap)
    const handleShortcut = (event: KeyboardEvent) => {
      if (matchesKeymap(event, parsedKeymap)) {
        event.preventDefault()
        openModal()
      }
    }
    document.addEventListener('keydown', handleShortcut)
    return () => document.removeEventListener('keydown', handleShortcut)
  }, [isBrowser, openModal])

  if (hidden) return null

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        aria-label={translate({
          id: 'theme.SearchBar.label',
          message: 'Search',
          description: 'The ARIA label and placeholder for search button'
        })}
        className='text-foreground -ml-1 flex size-9 shrink-0 cursor-pointer items-center justify-center bg-(--ifm-background-color)'
      >
        <Search />
      </button>

      <SearchModal
        open={open}
        onOpenChange={handleOpenChange}
        versionUrl={versionUrl}
        searchContext={searchContext}
      />
    </>
  )
}
