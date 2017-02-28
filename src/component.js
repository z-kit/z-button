/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-button
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  button: styles['z-button'] || 'z-button',
  isSecondary: styles['z-button--secondary'] || 'z-button--secondary',
  hasSuccess: styles['z-button--success'] || 'z-button--success',
  hasWarning: styles['z-button--warning'] || 'z-button--warning',
  hasDanger: styles['z-button--danger'] || 'z-button--danger',
  isBordered: styles['z-button--bordered'] || 'z-button--bordered',
  isFlat: styles['z-button--flat'] || 'z-button--flat',
  isRounded: styles['z-button--rounded'] || 'z-button--rounded',
  isBlock: styles['z-button--block'] || 'z-button--block',
  isIcon: styles['z-button--icon'] || 'z-button--icon',
};

export function ZButton(e) {
  return ({
    children,
    secondary,
    success,
    warning,
    danger,
    block,
    rounded,
    bordered,
    flat,
    icon,
    link,
    ...props
  }) => {
    const classes = [classnames.button];
    if (secondary) classes.push(classnames.isSecondary);
    if (success) classes.push(classnames.hasSuccess);
    if (warning) classes.push(classnames.hasWarning);
    if (danger) classes.push(classnames.hasDanger);
    if (bordered) classes.push(classnames.isBordered);
    if (flat) classes.push(classnames.isFlat);
    if (rounded) classes.push(classnames.isRounded);
    if (block) classes.push(classnames.isBlock);
    if (icon) classes.push(classnames.isIcon);
    return e(link ? 'a' : 'button', { className: classes.join(' '), ...props }, children);
  };
}

export default ZButton;
