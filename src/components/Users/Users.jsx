import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({
  users,
  currentPage,
  onPageChanged,
  unfollow,
  follow,
  followingInProgress,
  totalUsersCount,
  pageSize,
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map(u => (
        <User
          key={u.id}
          user={u}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
