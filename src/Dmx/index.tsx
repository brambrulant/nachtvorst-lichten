import React from 'react'
import SelectOutputDevice from './SelectOutputDevice'

export interface DmxProps {
  onChange: (event: React.ChangeEvent) => void
  className: string
}

// we still need a dmx library
export const Dmx: React.FC<DmxProps> = ({ onChange, className }) => {
  const outputs = [{ name: 'DMXOUTPUT HARDCODED' }]

  return (
    <div className={className}>
      <SelectOutputDevice outputs={outputs} onChange={onChange} />
    </div>
  )
}

export default Dmx
