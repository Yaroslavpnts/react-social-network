import Friends from './Friends';
import { connect } from 'react-redux';

// const Friends = props => {
//   return (
//     <div className={classes.friendsContainer}>
//       <span>Friends</span>
//       <ul className={classes.friendsList}>
//         {props.friends.map(friend => (
//           <Friend key={friend.id} name={friend.name} photo={friend.photo} />
//         ))}
//       </ul>
//     </div>
//   );
// };

const mapStateToProps = state => {
  return {
    friends: state.sidebar.friends,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const friendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default friendsContainer;
