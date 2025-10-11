import type { IUser } from '../model';
import styles from './UserCard.module.css';

const UserCard = ({
  id,
  name,
  username,
  website,
  address,
  company,
  email,
  phone,
}: IUser) => {
  return (
    <section className={styles.card}>
      <ul>
        <li>
          <b>{name}</b> (id: {id})
        </li>
        <li>Username: {username}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Website: {website}</li>
        <li>
          Company: {company.name}, {company.catchPhrase}, {company.bs}
        </li>
        <li>
          Address: {address.street}, {address.suite}, {address.city},{' '}
          {address.zipcode}
        </li>
      </ul>
    </section>
  );
};

export default UserCard;
