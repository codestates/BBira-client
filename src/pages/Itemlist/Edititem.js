import React from 'react';
import { items } from './data.json';

function EditItem({ match, history }) {
  const user = items.find((item) => item.id === match.params.id);
  return (
    <>
      <h2>User Detail</h2>
      <dt>id</dt>
      <dd>{user.id}</dd>
      <dt>name</dt>
      <dd>{item.name}</dd>
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
}

export default EditItem;
