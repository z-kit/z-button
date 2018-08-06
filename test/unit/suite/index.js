import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import component from '../../../src/component';

const ZButton = component(React.createElement);

test('JSX component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Other props', (t) => {
  const msg = 'should pass through';
  const actual = renderJSX(
    <ZButton disabled>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button" disabled>
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Secondary modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(
    <ZButton secondary>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--secondary">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Success modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(
    <ZButton success>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--success">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Warning modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(
    <ZButton warning>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--warning">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Danger modifier', (t) => {
  const msg = 'should be supported';
  const actual = renderJSX(
    <ZButton danger>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--danger">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Icon button', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton icon>
      i
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--icon">
      i
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Rounded button', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton rounded>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--rounded">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Block button', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton block>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--block">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Bordered button', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton bordered>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--bordered">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Flat button', (t) => {
  const msg = 'should render';
  const actual = renderJSX(
    <ZButton flat>
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <button type="button" className="z-button z-button--flat">
      Click me!
    </button>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Link button', (t) => {
  const msg = 'should render `a` tag';
  const actual = renderJSX(
    <ZButton link href="#0">
      Click me!
    </ZButton>
  );
  const expected = JSX(
    <a className="z-button" href="#0">
      Click me!
    </a>
  );
  return t.deepEqual(actual, expected, msg);
});
