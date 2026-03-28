import React from 'react'
import { useCursor } from '../../hooks/useCursor'

export const Cursor: React.FC = () => {
  useCursor()
  return (
    <div id="cur">
      <div id="cring" />
      <div id="cdot" />
    </div>
  )
}
