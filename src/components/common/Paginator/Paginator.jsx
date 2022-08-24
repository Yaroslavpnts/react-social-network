import { useState } from 'react';
import classes from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  // let pages = [];

  // if (currentPage <= 5) {
  //   for (let i = 1; i <= 10; i += 1) {
  //     pages.push(i);
  //   }
  // } else {
  //   for (let i = currentPage - 5; i < currentPage + 5; i += 1) {
  //     pages.push(i);
  //   }
  // }

  // return (
  //   <div className={classes.pages}>
  //     {pages.map(p => {
  //       return (
  //         <span
  //           onClick={e => {
  //             onPageChanged(p);
  //           }}
  //           key={p}
  //           className={currentPage === p ? classes.selectedPage : ''}
  //         >
  //           {p}
  //         </span>
  //       );
  //     })}
  //   </div>
  // );

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portioncount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

  const rightPortionPageNumber = portionNumber * portionSize;

  const onPortionChange = direction => {
    const currentPossibleLastPage = portionNumber * portionSize;
    if (direction === 'next') {
      onPageChanged(currentPossibleLastPage + 1);
    } else {
      onPageChanged(currentPossibleLastPage - 10);
    }
  };

  return (
    <div className={cn(classes.pages)}>
      {portionNumber > 1 && (
        <button
          onClick={e => {
            setPortionNumber(portionNumber - 1);
            onPortionChange('prev');
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span
              onClick={e => {
                onPageChanged(p);
              }}
              key={p}
              // className={currentPage === p ? classes.selectedPage : ''}
              className={cn({ [classes.selectedPage]: currentPage === p })}
            >
              {p}
            </span>
          );
        })}
      {portioncount > portionNumber && (
        <button
          onClick={e => {
            setPortionNumber(portionNumber + 1);
            onPortionChange('next');
          }}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
