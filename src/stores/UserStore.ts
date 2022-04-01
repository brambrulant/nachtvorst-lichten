import { Input } from 'webmidi'

export function userStore() {
  // note the use of this which refers to observable instance of the store
  return {
    inputs: [] as Input[],
    wizardFinished: false,
    setCurrentMidi(midi: Input) {
      this.inputs = [midi]
    },
    setWizardFinished(finish: boolean) {
      this.wizardFinished = finish
    },
    get isWizardFinished(): boolean {
      return this.wizardFinished
    },
    get currentMidi(): Input[] {
      return this.inputs
    },
  }
}

export type TStore = ReturnType<typeof userStore>
