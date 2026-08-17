import React from 'react';

// Deprecated component: Magical match stick removed. Cursor is always standard default system arrow.
export default function MagicalMatchStick() {
  if (typeof document !== 'undefined') {
    document.body.style.cursor = 'default';
  }
  return null;
}


