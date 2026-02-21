import StepCounter from './StepCounter';

function CounterApp() {
  // Props are used to configure each counter,
  // while state is managed independently inside StepCounter
  return (
    <>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </>
  );
}

export default CounterApp;