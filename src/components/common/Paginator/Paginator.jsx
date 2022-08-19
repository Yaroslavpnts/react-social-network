import classes from './Paginator.module.css';

const Paginator = ({ currentPage, onPageChanged }) => {
  let pages = [];

  if (currentPage <= 5) {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
    }
  } else {
    for (let i = currentPage - 5; i < currentPage + 5; i += 1) {
      pages.push(i);
    }
  }
  return (
    <div className={classes.pages}>
      {pages.map(p => {
        return (
          <span
            onClick={e => {
              onPageChanged(p);
            }}
            key={p}
            className={currentPage === p ? classes.selectedPage : ''}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
