// @ts-ignore
import LoadingRing from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing.jsx'
import {
  fetchIndexesByWorker,
  searchByWorker
  // @ts-ignore
} from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker.js'
// @ts-ignore
import { concatDocumentPath } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/concatDocumentPath.js'
// @ts-ignore
import { getStemmedPositions } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions.js'
// @ts-ignore
import { highlight } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight.js'
// @ts-ignore
import { highlightStemmed } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed.js'
// @ts-ignore
import { Mark } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js'
// @ts-ignore
import { searchResultLimits } from '@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGeneratedConstants.js'
// @ts-ignore
import { SearchDocumentType } from '@easyops-cn/docusaurus-search-local/dist/client/shared/interfaces.js'
import { FileText, Hash, Search } from 'lucide-react'
import { Dialog } from 'radix-ui'
import type { ReactNode } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useHistory } from '@docusaurus/router'

const SEARCH_PARAM_HIGHLIGHT = '_highlight'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildResultUrl(document: any, tokens: string[]) {
  let url = document.u
  if (Mark && tokens.length > 0) {
    const params = new URLSearchParams()
    for (const token of tokens) {
      params.append(SEARCH_PARAM_HIGHLIGHT, token)
    }
    url += `?${params.toString()}`
  }
  if (document.h) {
    url += document.h
  }
  return url
}

interface ResultItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
  isActive: boolean
  onClick: (url: string) => void
  onMouseEnter: () => void
}

function ResultItem({ result, isActive, onClick, onMouseEnter }: ResultItemProps) {
  const { document, type, page, tokens, metadata } = result
  const isTitle = type === SearchDocumentType.Title
  const isKeywords = type === SearchDocumentType.Keywords
  const isDescription = type === SearchDocumentType.Description
  const isContent = type === SearchDocumentType.Content
  const isTitleRelated = isTitle || isKeywords || isDescription

  const articleTitle = isContent ? document.s || document.t : document.t
  const pathItems = (isTitle ? document.b : (page?.b ?? document.b ?? [])).slice()
  if (!isTitleRelated && page?.t) {
    pathItems.push(page.t)
  }

  const titleHtml = isTitleRelated
    ? isKeywords
      ? highlight(document.s || document.t, tokens)
      : highlightStemmed(document.t, getStemmedPositions(metadata, 't'), tokens, 80)
    : highlightStemmed(articleTitle, getStemmedPositions(metadata, 't'), tokens, 80)

  const url = buildResultUrl(document, tokens)

  return (
    <button
      className={[
        'flex w-full cursor-pointer items-center gap-3 rounded-lg border-0 px-3 py-2.5 text-left transition-colors',
        '[&_mark]:text-primary [&_mark]:bg-transparent [&_mark]:font-semibold',
        isActive
          ? 'text-accent-foreground bg-gray-300 dark:bg-slate-700'
          : 'text-foreground hover:text-accent-foreground bg-transparent hover:bg-gray-300 dark:hover:bg-slate-700'
      ].join(' ')}
      onClick={() => onClick(url)}
      onMouseEnter={onMouseEnter}
      type='button'
    >
      <span className='text-muted-foreground h-5 shrink-0'>
        {isTitleRelated ? <FileText size={20} /> : <Hash size={20} />}
      </span>
      <span className='flex min-w-0 flex-1 flex-col gap-0.5'>
        <span
          className='truncate text-sm leading-snug font-medium'
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        {pathItems.length > 0 && (
          <span className='text-muted-foreground truncate text-xs'>
            {concatDocumentPath(pathItems)}
          </span>
        )}
      </span>
    </button>
  )
}

const KBD = ({ children }: { children: ReactNode }) => (
  <kbd className='inline-flex h-5 items-center justify-center rounded-[3px] border-0 bg-[linear-gradient(-225deg,#d5dbe4,#f8f8f8)] px-1.75 pb-0.5 font-mono text-[10px] text-[#969faf] shadow-[inset_0_-2px_0_0_#cdcde6,inset_0_0_1px_1px_#fff,0_1px_2px_1px_#1e235a66] dark:bg-[linear-gradient(-26.5deg,#565872,#31355b)] dark:text-[#7f8497] dark:shadow-[inset_0_-2px_0_0_#282d55,inset_0_0_1px_1px_#51577d,0_2px_2px_0_#0304094d]'>
    {children}
  </kbd>
)

interface SearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  versionUrl: string
  searchContext: string
}

export function SearchModal({ open, onOpenChange, versionUrl, searchContext }: SearchModalProps) {
  const [query, setQuery] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [indexLoaded, setIndexLoaded] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const history = useHistory()

  useEffect(() => {
    if (open && !indexLoaded) {
      fetchIndexesByWorker(versionUrl, searchContext).then(() => {
        setIndexLoaded(true)
      })
    }
  }, [open, indexLoaded, versionUrl, searchContext])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setResults([])
      setActiveIndex(0)
    }
  }, [open])

  useEffect(() => {
    if (!query) {
      setResults([])
      setActiveIndex(0)
      return
    }
    if (!indexLoaded) return

    let cancelled = false
    setLoading(true)

    searchByWorker(versionUrl, searchContext, query, searchResultLimits).then((r: any[]) => {
      if (!cancelled) {
        setResults(r)
        setActiveIndex(0)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [query, indexLoaded, versionUrl, searchContext])

  const navigate = useCallback(
    (url: string) => {
      onOpenChange(false)
      history.push(url)
    },
    [history, onOpenChange]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault()
        const result = results[activeIndex]
        if (result) {
          navigate(buildResultUrl(result.document, result.tokens))
        }
      }
    },
    [results, activeIndex, navigate]
  )

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.children[activeIndex]
      active?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-9998 bg-black/50 backdrop-blur-xs duration-150' />
        <Dialog.Content
          className='bg-popover text-popover-foreground border-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[8vh] left-1/2 z-9999 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-xl border shadow-2xl duration-150 focus:outline-none'
          onKeyDown={handleKeyDown}
          aria-describedby={undefined}
        >
          <Dialog.Title className='sr-only'>Search</Dialog.Title>

          {/* Input row */}
          <div className='border-border flex items-center gap-3 border-b px-4 py-3'>
            <span className='text-muted-foreground h-5 shrink-0'>
              <Search size={20} />
            </span>
            <input
              ref={inputRef}
              type='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search document...'
              className='text-foreground placeholder:text-muted-foreground flex-1 border-0 bg-transparent text-sm outline-none'
              autoComplete='off'
              spellCheck={false}
            />
            {loading && (
              <span className='text-muted-foreground h-5 shrink-0'>
                <LoadingRing size={20} />
              </span>
            )}
            <KBD>ESC</KBD>
          </div>

          {/* Results */}
          <div className='max-h-[60dvh] overflow-y-auto p-2' ref={listRef}>
            {results.length > 0 ? (
              results.map((result, index) => (
                <ResultItem
                  key={result.document.i}
                  result={result}
                  isActive={index === activeIndex}
                  onClick={navigate}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))
            ) : query && !loading ? (
              <p className='text-muted-foreground mb-0 py-10 text-center text-sm'>
                No results found for{' '}
                <span className='text-foreground font-medium'>&ldquo;{query}&rdquo;</span>
              </p>
            ) : (
              <p className='text-muted-foreground mb-0 py-10 text-center text-sm'>
                Enter keywords to search...
              </p>
            )}
          </div>

          {/* Footer hints */}
          {results.length > 0 && (
            <div className='border-border text-muted-foreground flex items-center gap-3 border-t px-4 py-2 text-[11px]'>
              <span className='flex items-center gap-1.5'>
                <KBD>↑↓</KBD>
                Navigation
              </span>
              <span className='flex items-center gap-1.5'>
                <KBD>↵</KBD>
                Enter
              </span>
              <span className='flex items-center gap-1.5'>
                <KBD>ESC</KBD>
                Close
              </span>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
