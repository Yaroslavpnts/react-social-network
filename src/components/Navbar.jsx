import classes from './Navbar.module.css';

/*
  let classes = {
    'nav': 'Navbar_nav__SavQF,
    'item': 'Navbar_item__GacED',
    'active': 'Navbar_active__PgXeu'
  }
*/

// let classesNew = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={`${classes.item} ${classes.active}`}>
          <a href="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a href="#">News</a>
        </li>
        <li className={classes.item}>
          <a href="#">Music</a>
        </li>
        <li className={classes.item}>
          <a href="#">Settings</a>
        </li>
      </ul>

      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
