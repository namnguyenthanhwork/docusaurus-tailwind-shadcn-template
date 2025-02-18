import React from 'react'
import { useHistory } from '@docusaurus/router'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../../components/ui/pagination.tsx'

export const BlogPagination = ({ metadata }) => {
  const history = useHistory()

  const handleParams = () => {
    const path = history.location.pathname
    const parts = path.split('/')
    const pageNumber = parts[parts.length - 1]
    return isNaN(pageNumber) ? 1 : parseInt(pageNumber)
  }

  const page = handleParams()

  const handlePageChange = (value) => {
    if (value === page) {
      return
    }
    const newPagePath = value === 1 ? '/blog' : `/blog/page/${value}`
    history.push(newPagePath)
  }

  // Generate array of page numbers
  const generatePagination = (currentPage, totalPages) => {
    let pages = []

    // Always show first page
    pages.push(1)

    if (currentPage > 3) {
      pages.push('ellipsis')
    }

    // Show pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis')
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  if (metadata.totalPages <= 1) {
    return null
  }

  const pages = generatePagination(page, metadata.totalPages)

  return (
    <Pagination className='mt-8'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => page > 1 && handlePageChange(page - 1)}
            className={page <= 1 ? 'hidden' : 'cursor-pointer'}
          />
        </PaginationItem>

        {pages.map((pageNum, index) => (
          <PaginationItem key={`${pageNum}-${index}`}>
            {pageNum === 'ellipsis' ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                onClick={() => handlePageChange(pageNum)}
                isActive={page === pageNum}
                className='cursor-pointer shadow-xs'
              >
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => page < metadata.totalPages && handlePageChange(page + 1)}
            className={page >= metadata.totalPages ? 'hidden' : 'cursor-pointer'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default BlogPagination
