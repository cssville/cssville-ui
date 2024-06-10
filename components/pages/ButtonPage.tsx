import React from 'react';
import { Button } from '../ui/simple/Button';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';
import { Stack } from '../ui/simple/Stack';

export const ButtonPage = (props) => {
  const ghIcon = <img src="img/mark-github.svg" alt="mark-github" className="hei-100 wid-100" />;
  return (
    <CommonPage title="Button">
      <Text xl>Default button:</Text>
      <Stack>
        <Button>Default button</Button>
        <Button noShadow>No shadow button</Button>
        <Button disabled>Disabled button</Button>
        <Button bold>Bold text button</Button>
        <Button startIcon={ghIcon}>Button with icon</Button>
      </Stack>

      <Divider lg />

      <Text xl>Button with custom text:</Text>
      <Stack>
        <Button buttonText={<span key="text" className="fon-wei-bold fon-siz-large col-green-500 tex-dec-underline">Custom text element</span>} />
      </Stack>

      <Divider lg />

      <Text xl>Default button sizes:</Text>
      <Stack>
        <Button xs>Extra small</Button>
        <Button sm>Small size</Button>
        <Button md>Medium size</Button>
        <Button lg>Large size</Button>
        <Button xl>Extra large</Button>
      </Stack>

      <Text xl>Rounded button sizes:</Text>
      <Stack>
        <Button xs rounded>Extra small</Button>
        <Button sm rounded>Small size</Button>
        <Button md rounded>Medium size</Button>
        <Button lg rounded>Large size</Button>
        <Button xl rounded>Extra large</Button>
      </Stack>

      <Text xl>Button with icon sizes:</Text>
      <Stack>
        <Button xs icon={ghIcon}>Extra small</Button>
        <Button sm icon={ghIcon}>Small size</Button>
        <Button md icon={ghIcon}>Medium size</Button>
        <Button lg icon={ghIcon}>Large size</Button>
        <Button xl icon={ghIcon}>Extra large</Button>
      </Stack>

      <Divider lg />

      <Text xl>Default buttons:</Text>
      <Stack>
        <Button primary>Primary button</Button>
        <Button secondary>Secondary button</Button>
        <Button success>Success button</Button>
        <Button info>Info button</Button>
        <Button warning>Warning button</Button>
        <Button error>Error button</Button>
      </Stack>

      <Text xl>Noborder buttons:</Text>
      <Stack>
        <Button primary noBorder>Primary button</Button>
        <Button secondary noBorder>Secondary button</Button>
        <Button success noBorder>Success button</Button>
        <Button info noBorder>Info button</Button>
        <Button warning noBorder>Warning button</Button>
        <Button error noBorder>Error button</Button>
      </Stack>

      <Text xl>Square buttons:</Text>
      <Stack>
        <Button primary square>Primary button</Button>
        <Button secondary square>Secondary button</Button>
        <Button success square>Success button</Button>
        <Button info square>Info button</Button>
        <Button warning square>Warning button</Button>
        <Button error square>Error button</Button>
      </Stack>

      <Text xl>Filled buttons:</Text>
      <Stack>
        <Button primary filled>Primary button</Button>
        <Button secondary filled>Secondary button</Button>
        <Button success filled>Success button</Button>
        <Button info filled>Info button</Button>
        <Button warning filled>Warning button</Button>
        <Button error filled>Error button</Button>
      </Stack>

      <Text xl>Outline buttons:</Text>
      <Stack>
        <Button primary outline>Primary button</Button>
        <Button secondary outline>Secondary button</Button>
        <Button success outline>Success button</Button>
        <Button info outline>Info button</Button>
        <Button warning outline>Warning button</Button>
        <Button error outline>Error button</Button>
      </Stack>

      <Text xl>Filled rounded buttons:</Text>
      <Stack>
        <Button primary filled rounded>Primary button</Button>
        <Button secondary filled rounded>Secondary button</Button>
        <Button success filled rounded>Success button</Button>
        <Button info filled rounded>Info button</Button>
        <Button warning filled rounded>Warning button</Button>
        <Button error filled rounded>Error button</Button>
      </Stack>

      <Text xl>Outline rounded buttons:</Text>
      <Stack>
        <Button primary outline rounded>Primary button</Button>
        <Button secondary outline rounded>Secondary button</Button>
        <Button success outline rounded>Success button</Button>
        <Button info outline rounded>Info button</Button>
        <Button warning outline rounded>Warning button</Button>
        <Button error outline rounded>Error button</Button>
      </Stack>
    </CommonPage>
  );
};