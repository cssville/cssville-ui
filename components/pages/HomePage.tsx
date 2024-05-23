import React from 'react';
import { Header } from '../Header';
import { Section } from '../ui/simple/Section';
import { Stack } from '../ui/simple/Stack';

export const HomePage = (props) => {
  return (
    <>
      <Header />
      <Section xl>
        <Stack column>
          {
            [
              ['Home', '/'],
              ['Buttons', '/button'],
              ['Typography', '/typography'],
            ].map(([text, href]) => (
              <a className="dis-flex pad-x-4 pad-y-3 tex-dec-none bac-color-grey-100-hover bor-rad-4 col-blue-grey-900" href={href}>
                <span className="fon-siz-medium fon-wei-bold">{text}</span>
              </a>
            ))
          }
        </Stack>
      </Section>
    </>
  );
};