import { test } from 'ava';
import Nightmare from 'nightmare';

test('CSS component - default', (t) => {
  t.plan(1);
  const msg = 'should render button with Click me! text';
  const expected = 'Click me!';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-button')
    .evaluate(() => document.querySelector('.z-button').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - icon', (t) => {
  t.plan(1);
  const msg = 'should render circular button';
  const expected = '100%';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=icon')
    .wait('.z-button')
    .evaluate(() => window.getComputedStyle(document.querySelector('.z-button')).borderRadius)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - rounded', (t) => {
  t.plan(1);
  const msg = 'should render rounded button';
  const expected = '96px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=rounded')
    .wait('.z-button')
    .evaluate(() => window.getComputedStyle(document.querySelector('.z-button')).borderRadius)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - block', (t) => {
  t.plan(1);
  const msg = 'should render block button';
  const expected = true;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=block')
    .wait('.z-button')
    .evaluate(() => {
      const containerStyle = window.getComputedStyle(document.querySelector('body > div'));
      const buttonStyle = window.getComputedStyle(document.querySelector('.z-button'));
      return containerStyle.width === buttonStyle.width;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - bordered', (t) => {
  t.plan(1);
  const msg = 'should render bordered button';
  const expected = true;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=bordered')
    .wait('.z-button')
    .evaluate(() => {
      const buttonStyle = window.getComputedStyle(document.querySelector('.z-button'));
      const { backgroundColor, borderColor } = buttonStyle;
      return (backgroundColor === 'rgba(0, 0, 0, 0)' && borderColor !== 'rgba(0, 0, 0, 0)');
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - flat', (t) => {
  t.plan(1);
  const msg = 'should render flat button';
  const expected = true;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=flat')
    .wait('.z-button')
    .evaluate(() => {
      const buttonStyle = window.getComputedStyle(document.querySelector('.z-button'));
      const { backgroundColor, borderColor } = buttonStyle;
      return (backgroundColor === 'rgba(0, 0, 0, 0)' && borderColor === 'rgba(0, 0, 0, 0)');
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - disabled state', (t) => {
  t.plan(1);
  const msg = 'should render disabled button';
  const expected = 0;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=disabled%20state')
    .wait('.z-button')
    .evaluate(() => {
      const buttonStyle = window.getComputedStyle(document.querySelector('.z-button'));
      const { opacity } = buttonStyle;
      return parseInt(opacity, 10);
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - link button', (t) => {
  t.plan(1);
  const msg = 'should render link button';
  const expected = 'a';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=link')
    .wait('.z-button')
    .evaluate(() => document.querySelector('.z-button').tagName.toLowerCase())
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});