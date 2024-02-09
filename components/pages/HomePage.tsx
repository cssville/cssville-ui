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
              <a className="d-flex px-4 py-3 text-decoration-none bg-color-grey-100-hover br-4 color-blue-grey-900" href={href}>
                <span className="fs-medium fw-bold">{text}</span>
              </a>
            ))
          }
        </Stack>
      </Section>
    </>
  );
};