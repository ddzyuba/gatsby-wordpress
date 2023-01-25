import React from 'react';
import { getBlogPaginatedHref } from '../../utils/blogUtils';
import PropTypes from 'prop-types';
import {
  PaginationContainer,
  PageNumber,
  PageNumberDots,
  DesktopContainer,
} from './PaginationBlogStyles';

const PaginationBlog = ({ currentPage, numPages, categoryURL }) => {
  const slug = categoryURL ? categoryURL : undefined;
  const startingPageNumber = () => {
    const visibleStartPageNumbers = [];
    for (let i = 1; i <= 2; i += 1) {
      visibleStartPageNumbers.push(i);
    }

    return (
      <>
        {visibleStartPageNumbers.map(
          pageNumber =>
            pageNumber < currentPage - 1 && (
              <PageNumber
                key={pageNumber}
                active={currentPage === pageNumber}
                href={getBlogPaginatedHref(pageNumber, slug)}
              >
                {pageNumber}
              </PageNumber>
            )
        )}
        <PageNumberDots
          show={
            currentPage - 2 <
            visibleStartPageNumbers[visibleStartPageNumbers.length - 1] + 1
          }
        >
          ...
        </PageNumberDots>
      </>
    );
  };

  const endingPageNumber = () => {
    const visibleEndPageNumbers = [];
    for (let i = numPages - 2; i < numPages; i += 1) {
      visibleEndPageNumbers.push(i + 1);
    }

    return (
      <>
        {currentPage < visibleEndPageNumbers[0] - 2 && (
          <PageNumberDots>...</PageNumberDots>
        )}
        {visibleEndPageNumbers.map(
          pageNumber =>
            currentPage + 1 < pageNumber && (
              <PageNumber
                key={pageNumber}
                active={currentPage === pageNumber}
                href={getBlogPaginatedHref(pageNumber, slug)}
              >
                {pageNumber}
              </PageNumber>
            )
        )}
      </>
    );
  };

  const middlePageNumber = () => (
    <>
      {currentPage > 1 && (
        <PageNumber href={getBlogPaginatedHref(currentPage - 1, slug)}>
          {currentPage - 1}
        </PageNumber>
      )}
      <PageNumber active href={getBlogPaginatedHref(currentPage, slug)}>
        {currentPage}
      </PageNumber>
      {currentPage < numPages && (
        <PageNumber href={getBlogPaginatedHref(currentPage + 1, slug)}>
          {currentPage + 1}
        </PageNumber>
      )}
    </>
  );

  return (
    <PaginationContainer>
      {numPages > 1 && (
        <>
          {currentPage > 1 && (
            <PageNumber href={getBlogPaginatedHref(currentPage - 1, slug)}>
              &#60;
            </PageNumber>
          )}
          <DesktopContainer>{startingPageNumber()}</DesktopContainer>
          {middlePageNumber()}
          <DesktopContainer>{endingPageNumber()}</DesktopContainer>
          {currentPage < numPages && (
            <PageNumber href={getBlogPaginatedHref(currentPage + 1, slug)}>
              &#62;
            </PageNumber>
          )}
        </>
      )}
    </PaginationContainer>
  );
};

export default PaginationBlog;

PaginationBlog.propTypes = {
  currentPage: PropTypes.number, 
  numPages: PropTypes.number, 
  categoryURL: PropTypes.string
};