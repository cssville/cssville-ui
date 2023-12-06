import React from 'react';
import { Header } from '../Header';
import { Section } from '../ui/simple/Section';
import { Display } from '../ui/simple/Typography';
import { Divider } from '../ui/simple/Divider';

export const CommonPage = (props) => {
  return (
    <>
      <Header />
      <Section xl className='mh'>
        <Display>{props.title}</Display>
        <Divider lg />
        {props.children}
      </Section>
    </>
  );
};