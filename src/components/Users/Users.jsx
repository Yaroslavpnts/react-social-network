import classes from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        fullName: 'Dmitriy',
        status: 'i am a boss',
        followed: false,
        location: { city: 'Kyiv', country: 'Ukraine' },
      },
      {
        id: 2,
        photoUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        fullName: 'Anatoliy',
        status: 'i want to eat',
        followed: true,
        location: { city: 'Odessa', country: 'Ukraine' },
      },
      {
        id: 3,
        photoUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        fullName: 'Sasha',
        status: 'i study hard',
        followed: false,
        location: { city: 'Poltava', country: 'Ukraine' },
      },
      {
        id: 4,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa31xKmnI6rYS9nSNXJNOewF7o1E49L6r_Q&usqp=CAU',
        fullName: 'Dasha',
        status: 'i want to relax',
        followed: true,
        location: { city: 'Kharkiv', country: 'Ukraine' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id} className={classes.user}>
          <div className={classes.photo}>
            <div className={classes.imgWrapper}>
              <img src={u.photoUrl}></img>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.intro}>
              <h3>{u.fullName}</h3>
              <p>{u.status}</p>
            </div>
            <div className={classes.location}>
              <span>{u.location.country}</span>
              <span>{u.location.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
