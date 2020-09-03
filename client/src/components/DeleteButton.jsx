import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const DeleteButton = ({ id }) => {
  const { setLoading } = useContext(AppContext);

  const handleDelete = async () => {
    setLoading(true);
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this task',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    });

    if (willDelete) {
      axios
        .delete(`/api/tasks/${id}`, { withCredentials: true })
        .then(() => {
          setLoading(false);
          swal('Poof', 'your task has been deleted', 'success');
        })
        .catch((error) => console.log(error));
    } else {
      swal('Your task is safe!');
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteButton;
