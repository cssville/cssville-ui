import React from 'react';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Headline, Title, Text, Label, Display } from '../ui/simple/Typography';

export const TypographyPage = (props) => {
  return (
    <CommonPage title="Typography">
      <Text xl>Default Display:</Text>
      <Display>Default display</Display>
      <Divider lg />
      <Text xl>Display sizes:</Text>
      <Display xl>Extra large display</Display>
      <Display lg>Large display</Display>
      <Display md>Medium display</Display>
      <Display sm>Small display</Display>
      <Display xs>Extra small display</Display>

      <Divider lg />

      <Text xl>Default Headline:</Text>
      <Headline>Default headline</Headline>
      <Divider lg />
      <Text xl>Headline sizes:</Text>
      <Headline xl>Extra large headline</Headline>
      <Headline lg>Large headline</Headline>
      <Headline md>Medium headline</Headline>
      <Headline sm>Small headline</Headline>
      <Headline xs>Extra small headline</Headline>

      <Divider lg />

      <Text xl>Default Title:</Text>
      <Title>Default title</Title>
      <Divider lg />
      <Text xl>Title sizes:</Text>
      <Title xl>Extra large title</Title>
      <Title lg>Large title</Title>
      <Title md>Medium title</Title>
      <Title sm>Small title</Title>
      <Title xs>Extra small title</Title>

      <Divider lg />

      <Text xl>Default Label:</Text>
      <div className="d-flex w-12"><Label>Default label</Label></div>
      <Divider lg />
      <Text xl>Label sizes:</Text>
      <div className="d-flex w-12"><Label xl>Extra large label</Label></div>
      <div className="d-flex w-12"><Label lg>Large label</Label></div>
      <div className="d-flex w-12"><Label md>Medium label</Label></div>
      <div className="d-flex w-12"><Label sm>Small label</Label></div>
      <div className="d-flex w-12"><Label xs>Extra small label</Label></div>

      <Divider lg />

      <Text xl>Default Text:</Text>
      <Text>Default text</Text>
      <Divider lg />
      <Text xl>Text sizes:</Text>
      <Text xl>Extra large text</Text>
      <Text lg>Large text</Text>
      <Text md>Medium text</Text>
      <Text sm>Small text</Text>
      <Text xs>Extra small text</Text>
    </CommonPage>
  );
};