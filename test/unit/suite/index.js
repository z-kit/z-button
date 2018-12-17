import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import component from '../../../src/component';

configure({ adapter: new Adapter() });

const ZButton = component(React.createElement);

test('JSX component', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Other props', (t) => {
  const msg = 'should pass through';
  const actual = shallow(
    <ZButton disabled>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button" disabled type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Secondary modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(
    <ZButton secondary>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--secondary" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(
    <ZButton success>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--success" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(
    <ZButton warning>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--warning" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be supported';
  const actual = shallow(
    <ZButton danger>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--danger" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Icon button', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton icon>
      i
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--icon" type="button">
      i
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Rounded button', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton rounded>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--rounded" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Block button', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton block>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--block" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Bordered button', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton bordered>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--bordered" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Flat button', (t) => {
  const msg = 'should render';
  const actual = shallow(
    <ZButton flat>
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <button className="z-button z-button--flat" type="button">
      Click me!
    </button>
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Link button', (t) => {
  const msg = 'should render `a` tag';
  const actual = shallow(
    <ZButton link href="#0">
      Click me!
    </ZButton>
  ).html();
  const expected = shallow(
    <a className="z-button" href="#0">
      Click me!
    </a>
  ).html();
  return t.deepEqual(actual, expected, msg);
});
