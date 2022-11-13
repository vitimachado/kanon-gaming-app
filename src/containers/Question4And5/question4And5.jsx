import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionsContainer from '../../components/QuestionsContainer';
import SignUp from '../../components/SignUp/signUp';
import Modal from '../../components/common/modal/modal';
import SignIn from '../../components/SignIn/signIn';
import './question4And5.css';
import Button from '../../components/common/button/button';

export default function Question4And5() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);

  /* Hook to look user state, and if has user navigate to question 6. */
  useEffect(() => {
    if (user) {
      navigate('/q6');
    }
  }, [user]);

  /* Function to toogle modal visible. */
  const handleToggleModal = (value) => {
    setOpenModal(value);
  };

  const handleBackButton = () => {
    navigate('/q3');
  };

  const style = {
    width: '40%',
    marginTop: '30px',
  };

  const styleCard = {
    width: '35%',
  };

  if (user && user.email) return null;

  return (
    <QuestionsContainer title="Question 4 and 5" style={style}>
      <SignIn>
        <button
          type="button"
          className="button-sign-up"
          onClick={() => handleToggleModal(true)}
        >
          Sign Up
        </button>
      </SignIn>
      {openModal ? (
        <Modal
          styleCard={styleCard}
          onClickBackground={() => handleToggleModal(false)}
        >
          <SignUp closeModal={() => handleToggleModal(false)} />
        </Modal>
      ) : null}
      <Button className="button-fab" onClick={() => handleBackButton()}>
        Back
      </Button>
    </QuestionsContainer>
  );
}
