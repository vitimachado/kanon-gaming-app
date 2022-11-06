import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionsContainer from '../../components/QuestionsContainer';
import Button from '../../components/shared/button/button';
import './question1.css';

export default function Question1() {
  const navigate = useNavigate();

  const style = {
    width: '40%',
    height: '30%',
    marginTop: '30px',
  };

  const test = [
    {
      name: {
        common: 'Malta',
        official: 'Republic of Malta',
        nativeName: {
          eng: { official: 'Republic of Malta', common: 'Malta' },
          mlt: { official: "Repubblika ta ' Malta", common: 'Malta' },
        },
      },
      tld: ['.mt'],
      cca2: 'MT',
      ccn3: '470',
      cca3: 'MLT',
      cioc: 'MLT',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: { EUR: { name: 'Euro', symbol: '€' } },
      idd: { root: '+3', suffixes: ['56'] },
      capital: ['Valletta'],
      altSpellings: ['MT', 'Republic of Malta', "Repubblika ta' Malta"],
      region: 'Europe',
      subregion: 'Southern Europe',
      languages: { eng: 'English', mlt: 'Maltese' },
      translations: {
        ara: { official: 'جمهورية مالطا', common: 'مالطا' },
        bre: { official: 'Republik Malta', common: 'Malta' },
        ces: { official: 'Maltská republika', common: 'Malta' },
        cym: { official: 'Republic of Malta', common: 'Malta' },
        deu: { official: 'Republik Malta', common: 'Malta' },
        est: { official: 'Malta Vabariik', common: 'Malta' },
        fin: { official: 'Maltan tasavalta', common: 'Malta' },
        fra: { official: 'République de Malte', common: 'Malte' },
        hrv: { official: 'Republika Malta', common: 'Malta' },
        hun: { official: 'Máltai Köztársaság', common: 'Málta' },
        ita: { official: 'Repubblica di Malta', common: 'Malta' },
        jpn: { official: 'マルタ共和国', common: 'マルタ' },
        kor: { official: '몰타 공화국', common: '몰타' },
        nld: { official: 'Republiek Malta', common: 'Malta' },
        per: { official: 'جمهوری مالت', common: 'مالت' },
        pol: { official: 'Republika Malty', common: 'Malta' },
        por: { official: 'República de Malta', common: 'Malta' },
        rus: { official: 'Республика Мальта', common: 'Мальта' },
        slk: { official: 'Maltská republika', common: 'Malta' },
        spa: { official: 'República de Malta', common: 'Malta' },
        swe: { official: 'Republiken Malta', common: 'Malta' },
        tur: { official: 'Malta Cumhuriyeti', common: 'Malta' },
        urd: { official: 'جمہوریہ مالٹا', common: 'مالٹا' },
        zho: { official: '马耳他共和国', common: '马耳他' },
      },
      latlng: [35.83333333, 14.58333333],
      landlocked: false,
      area: 316.0,
      demonyms: {
        eng: { f: 'Maltese', m: 'Maltese' },
        fra: { f: 'Maltaise', m: 'Maltais' },
      },
      flag: '\uD83C\uDDF2\uD83C\uDDF9',
      maps: {
        googleMaps: 'https://goo.gl/maps/skXCqguxDxxEKVk47',
        openStreetMaps: 'https://www.openstreetmap.org/relation/365307',
      },
      population: 525285,
      gini: { 2018: 28.7 },
      fifa: 'MLT',
      car: { signs: ['M'], side: 'left' },
      timezones: ['UTC+01:00'],
      continents: ['Europe'],
      flags: {
        png: 'https://flagcdn.com/w320/mt.png',
        svg: 'https://flagcdn.com/mt.svg',
      },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mt.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mt.svg',
      },
      startOfWeek: 'monday',
      capitalInfo: { latlng: [35.88, 14.5] },
      postalCode: { format: '@@@ ###|@@@ ##', regex: '^([A-Z]{3}\\d{2}\\d?)$' },
    },
  ];

  const handleOnClick = () => {
    navigate('/q2');
  };

  return (
    <QuestionsContainer title="Question 1" style={style}>
      <h5>This application was made in {test[0].name.common}</h5>
      <img src={test[0].flags.svg} alt="Flag" width="30%" />
      <Button onClick={handleOnClick}>Next</Button>
    </QuestionsContainer>
  );
}
