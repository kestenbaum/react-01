import { useEffect } from 'react';

import type { AppDispatch, RootState } from '../../app/store';
import {
  getUsers,
  selectedUsers,
  selectedUsersError,
  selectedUsersStatus,
} from '../../app/store/slice/userSlice';
import UserCard from '../../entities/user/ui';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => selectedUsers(state));
  const status = useSelector((state: RootState) => selectedUsersStatus(state));
  const error = useSelector((state: RootState) => selectedUsersError(state));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error {error}</p>;

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
          address={user.address}
          company={user.company}
        />
      ))}
    </div>
  );
};

export default UserList;
