import { Input } from 'webmidi'

export function userStore() {
  // note the use of this which refers to observable instance of the store
  return {
    inputs: [] as Input[],
    setCurrentMidi(midi: Input) {
      this.inputs = [midi]
    },
    get currentMidi(): Input[] {
      return this.inputs
    },
  }
}

export type TStore = ReturnType<typeof userStore>
