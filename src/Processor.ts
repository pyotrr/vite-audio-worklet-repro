// @ts-ignore
class Processor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList: any, outputList: any, parameters: any) {
    console.log(inputList, outputList, parameters);
    return true;
  }
}

registerProcessor("processor", Processor);
