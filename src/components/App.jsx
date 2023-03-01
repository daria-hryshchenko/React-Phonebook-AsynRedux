import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';
import { getIsloading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
export default function App() {
  const dispatch = useDispatch();
  const isloading = useSelector(getIsloading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isloading && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter
        onFilterChange={event => dispatch(addFilter(event.target.value))}
      />
      <ContactList />
    </Container>
  );
}

const Container = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #1d81af;
`;

const SubTitle = styled.h2`
  font-size: 25px;
  color: #1d81af;
`;
