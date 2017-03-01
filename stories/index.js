import React from 'react';
import { storiesOf } from '@kadira/storybook';
import button from '../src/component';

const ZButton = button(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <button className="z-button">Click me!</button>
  ))
  .add('icon', () => (
    <button className="z-button z-button--icon">i</button>
  ))
  .add('rounded', () => (
    <button className="z-button z-button--rounded">Click me!</button>
  ))
  .add('block', () => (
    <button className="z-button z-button--block">Click me!</button>
  ))
  .add('bordered', () => (
    <button className="z-button z-button--bordered">Click me!</button>
  ))
  .add('flat', () => (
    <button className="z-button z-button--flat">Click me!</button>
  ))
  .add('colors', () => (
    <div>
      <button className="z-button">Primary</button>
      <button className="z-button z-button--secondary">Secondary</button>
      <button className="z-button z-button--success">Success</button>
      <button className="z-button z-button--warning">Warning</button>
      <button className="z-button z-button--danger">Danger</button>
    </div>
  ))
  .add('disabled state', () => (
    <button className="z-button" disabled>Click me!</button>
  ))
  .add('link', () => (
    <a href="#" className="z-button">Link button</a>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZButton>Click me!</ZButton>)
  .add('icon', () => <ZButton icon>i</ZButton>)
  .add('rounded', () => <ZButton rounded>Click me!</ZButton>)
  .add('block', () => <ZButton block>Click me!</ZButton>)
  .add('bordered', () => <ZButton bordered>Click me!</ZButton>)
  .add('flat', () => <ZButton flat>Click me!</ZButton>)
  .add('colors', () => (
    <div>
      <ZButton>Primary</ZButton>
      <ZButton secondary>Secondary</ZButton>
      <ZButton success>Success</ZButton>
      <ZButton warning>Warning</ZButton>
      <ZButton danger>Danger</ZButton>
    </div>
  ))
  .add('disabled state', () => <ZButton disabled>Click me!</ZButton>)
  .add('link', () => <ZButton link>Link button</ZButton>);
