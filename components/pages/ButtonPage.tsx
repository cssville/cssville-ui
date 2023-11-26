import React from 'react';
import { Button } from '../ui/simple/Button';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';
import { Row } from '../ui/simple/Row';

export const ButtonPage = (props) => {
  const ghIcon = <img src="img/mark-github.svg" alt="mark-github" className="h-100 w-100" />;
  return (
    <CommonPage title="Button">
      <Text xl>Default button:</Text>
      <Row>
        <Button>Default button</Button>
        <Button noShadow>No shadow button</Button>
        <Button disabled>Disabled button</Button>
        <Button bold>Bold text button</Button>
        <Button startIcon={ghIcon}>Button with icon</Button>
      </Row>

      <Divider lg />

      <Text xl>Button with custom text:</Text>
      <Row>
        <Button buttonText={<span className="fw-bold fs-large color-green-500 text-decoration-underline">Custom text element</span>} />
      </Row>

      <Divider lg />

      <Text xl>Default button sizes:</Text>
      <Row>
        <Button xs>Extra small</Button>
        <Button sm>Small size</Button>
        <Button md>Medium size</Button>
        <Button lg>Large size</Button>
        <Button xl>Extra large</Button>
      </Row>

      <Text xl>Rounded button sizes:</Text>
      <Row>
        <Button xs rounded>Extra small</Button>
        <Button sm rounded>Small size</Button>
        <Button md rounded>Medium size</Button>
        <Button lg rounded>Large size</Button>
        <Button xl rounded>Extra large</Button>
      </Row>

      <Text xl>Button with icon sizes:</Text>
      <Row>
        <Button xs icon={ghIcon}>Extra small</Button>
        <Button sm icon={ghIcon}>Small size</Button>
        <Button md icon={ghIcon}>Medium size</Button>
        <Button lg icon={ghIcon}>Large size</Button>
        <Button xl icon={ghIcon}>Extra large</Button>
      </Row>

      <Divider lg />

      <Text xl>Default buttons:</Text>
      <Row>
        <Button primary>Primary button</Button>
        <Button secondary>Secondary button</Button>
        <Button success>Success button</Button>
        <Button info>Info button</Button>
        <Button warning>Warning button</Button>
        <Button error>Error button</Button>
      </Row>

      <Text xl>Noborder buttons:</Text>
      <Row>
        <Button primary noBorder>Primary button</Button>
        <Button secondary noBorder>Secondary button</Button>
        <Button success noBorder>Success button</Button>
        <Button info noBorder>Info button</Button>
        <Button warning noBorder>Warning button</Button>
        <Button error noBorder>Error button</Button>
      </Row>

      <Text xl>Square buttons:</Text>
      <Row>
        <Button primary square>Primary button</Button>
        <Button secondary square>Secondary button</Button>
        <Button success square>Success button</Button>
        <Button info square>Info button</Button>
        <Button warning square>Warning button</Button>
        <Button error square>Error button</Button>
      </Row>

      <Text xl>Filled buttons:</Text>
      <Row>
        <Button primary filled>Primary button</Button>
        <Button secondary filled>Secondary button</Button>
        <Button success filled>Success button</Button>
        <Button info filled>Info button</Button>
        <Button warning filled>Warning button</Button>
        <Button error filled>Error button</Button>
      </Row>

      <Text xl>Outline buttons:</Text>
      <Row>
        <Button primary outline>Primary button</Button>
        <Button secondary outline>Secondary button</Button>
        <Button success outline>Success button</Button>
        <Button info outline>Info button</Button>
        <Button warning outline>Warning button</Button>
        <Button error outline>Error button</Button>
      </Row>

      <Text xl>Filled rounded buttons:</Text>
      <Row>
        <Button primary filled rounded>Primary button</Button>
        <Button secondary filled rounded>Secondary button</Button>
        <Button success filled rounded>Success button</Button>
        <Button info filled rounded>Info button</Button>
        <Button warning filled rounded>Warning button</Button>
        <Button error filled rounded>Error button</Button>
      </Row>

      <Text xl>Outline rounded buttons:</Text>
      <Row>
        <Button primary outline rounded>Primary button</Button>
        <Button secondary outline rounded>Secondary button</Button>
        <Button success outline rounded>Success button</Button>
        <Button info outline rounded>Info button</Button>
        <Button warning outline rounded>Warning button</Button>
        <Button error outline rounded>Error button</Button>
      </Row>
    </CommonPage>
  );
};