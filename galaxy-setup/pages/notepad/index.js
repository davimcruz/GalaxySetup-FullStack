import React from 'react';
import NotepadScript from '../../components/scripts/NotepadScript';
import Tools from '../../components/Tools';

export default function Notepad() {
  return (
    <div className="notepad-container">
      <Tools />
      <NotepadScript />
    </div>
  );
}