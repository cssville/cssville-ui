import React from 'react';
import { Header } from '../Header';
import { Section } from '../ui/simple/Section';
import { Stack } from '../ui/simple/Stack';
import { Button } from "../ui/simple/Button";

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
              ['Chips', '/chip'],
              ['Typography', '/typography'],
            ].map(([text, href]) => (
              <a key={href} className="dis-flex pad-x-5 pad-y-4 tex-dec-none bac-color-grey-100-hover bor-rad-5 col-blue-grey-900" href={href}>
                <span className="fon-siz-medium fon-wei-bold">{text}</span>
              </a>
            ))
          }
        </Stack>
      </Section>
    </>
  );
};