import React from 'react'
import { Input, WebMidi } from 'webmidi'
import { observer } from 'mobx-react'
import SelectInputDevice from './SelectInputDevice'
import { useStore } from '../stores'

export interface MidiProps {
  className: string
}

export const Midi: React.FC<MidiProps> = ({ className }) => {
  const { setCurrentMidi } = useStore()

  const [inputs, setInputs] = React.useState<Input[]>([])

  const onEnabled = () => {
    if (WebMidi.inputs.length < 1) {
      setInputs([])
    } else {
      setInputs(WebMidi.inputs)
    }
  }

  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err))

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const midiInput = inputs.find((input) => input.name === e.target.value)
      if (midiInput !== undefined) setCurrentMidi(midiInput)
    },
    [],
  )

  return (
    <div className={className}>
      <div>
        <SelectInputDevice inputs={inputs} onChange={handleChange} />
      </div>
    </div>
  )
}

export default observer(Midi)
