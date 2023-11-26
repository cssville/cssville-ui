import React from 'react';
import { Chip } from '../ui/simple/Chip';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';
import { Row } from '../ui/simple/Row';

export const ChipPage = (props) => {
  return (
    <CommonPage title="Chip">
      <Text xl>Default chip:</Text>
      <Row>
        <Chip>Default chip</Chip>
        <Chip disabled>Disabled chip</Chip>
        <Chip bold>Bold text chip</Chip>
      </Row>

      <Divider lg />

      <Text xl>Default chip sizes:</Text>
      <Row>
        <Chip xs>Extra small</Chip>
        <Chip sm>Small size</Chip>
        <Chip md>Medium size</Chip>
        <Chip lg>Large size</Chip>
        <Chip xl>Extra large</Chip>
      </Row>

      <Text xl>Rounded chip sizes:</Text>
      <Row>
        <Chip xs rounded>Extra small</Chip>
        <Chip sm rounded>Small size</Chip>
        <Chip md rounded>Medium size</Chip>
        <Chip lg rounded>Large size</Chip>
        <Chip xl rounded>Extra large</Chip>
      </Row>

      <Divider lg />

      <Text xl>Default chips:</Text>
      <Row>
        <Chip primary>Primary chip</Chip>
        <Chip secondary>Secondary chip</Chip>
        <Chip success>Success chip</Chip>
        <Chip info>Info chip</Chip>
        <Chip warning>Warning chip</Chip>
        <Chip error>Error chip</Chip>
      </Row>

      <Text xl>Noborder chips:</Text>
      <Row>
        <Chip primary noBorder>Primary chip</Chip>
        <Chip secondary noBorder>Secondary chip</Chip>
        <Chip success noBorder>Success chip</Chip>
        <Chip info noBorder>Info chip</Chip>
        <Chip warning noBorder>Warning chip</Chip>
        <Chip error noBorder>Error chip</Chip>
      </Row>

      <Text xl>Square chips:</Text>
      <Row>
        <Chip primary square>Primary chip</Chip>
        <Chip secondary square>Secondary chip</Chip>
        <Chip success square>Success chip</Chip>
        <Chip info square>Info chip</Chip>
        <Chip warning square>Warning chip</Chip>
        <Chip error square>Error chip</Chip>
      </Row>

      <Text xl>Filled chips:</Text>
      <Row>
        <Chip primary filled>Primary chip</Chip>
        <Chip secondary filled>Secondary chip</Chip>
        <Chip success filled>Success chip</Chip>
        <Chip info filled>Info chip</Chip>
        <Chip warning filled>Warning chip</Chip>
        <Chip error filled>Error chip</Chip>
      </Row>

      <Text xl>Outline chips:</Text>
      <Row>
        <Chip primary outline>Primary chip</Chip>
        <Chip secondary outline>Secondary chip</Chip>
        <Chip success outline>Success chip</Chip>
        <Chip info outline>Info chip</Chip>
        <Chip warning outline>Warning chip</Chip>
        <Chip error outline>Error chip</Chip>
      </Row>

      <Text xl>Filled rounded chips:</Text>
      <Row>
        <Chip primary filled rounded>Primary chip</Chip>
        <Chip secondary filled rounded>Secondary chip</Chip>
        <Chip success filled rounded>Success chip</Chip>
        <Chip info filled rounded>Info chip</Chip>
        <Chip warning filled rounded>Warning chip</Chip>
        <Chip error filled rounded>Error chip</Chip>
      </Row>

      <Text xl>Outline rounded chips:</Text>
      <Row>
        <Chip primary outline rounded>Primary chip</Chip>
        <Chip secondary outline rounded>Secondary chip</Chip>
        <Chip success outline rounded>Success chip</Chip>
        <Chip info outline rounded>Info chip</Chip>
        <Chip warning outline rounded>Warning chip</Chip>
        <Chip error outline rounded>Error chip</Chip>
      </Row>
    </CommonPage>
  );
};