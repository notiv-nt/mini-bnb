import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListingService from '~/services/ListingService';
import { State } from '~/store/reducer';
import styles from './SaveListing.module.scss';

interface SaveListingProps {
  id: number;
  mode?: 'default' | 'full';
}

const SaveListing: React.FC<SaveListingProps> = ({ id, mode = 'default' }) => {
  const { user } = useSelector<State, State>((state) => state);
  const isAuthenticated = !!user;
  const isSaved = user?.listings.includes(id);
  const dispatch = useDispatch();

  const message = isSaved ? 'Saved' : 'Save';

  const toggle = async () => {
    const res = await ListingService.toggle(id);

    if (res.status === 'SET') {
      dispatch({ type: 'ADD_LISTING', payload: id });
    }

    if (res.status === 'REMOVE') {
      dispatch({ type: 'REMOVE_LISTING', payload: id });
    }
  };

  if (!isAuthenticated) return null;

  return (
    <button type="button" className={`${styles.SaveButton} ${styles['is-' + mode]}`} onClick={toggle}>
      <i className={`fa fa-lg ${isSaved ? 'fa-heart' : 'fa-heart-o'}`}></i>

      {mode === 'full' && <span>{message}</span>}
    </button>
  );
};

export default SaveListing;
