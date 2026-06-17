import { createEffect, createMemo, createSignal, type Component } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const [secondCount, setSecondCount] = createSignal(0);

  const doubleCount = () => count() * 2;
  // signals memorizados, solo se recalculan cuando count cambia
  const isDivisibleByThree = createMemo(() => count() % 3 === 0);

  createEffect(() => {
    console.log("Count changed:", count(), "Second Count changed:", secondCount());
    console.log("Double Count:", doubleCount());
    console.log("Is Divisible by Three:", isDivisibleByThree());
  });

  return (
    <>
      <h2 class="text-2xl mt-4">Doble count: {doubleCount()}</h2>
      <h2 class="text-2xl mt-4">
        Is count divisible by 3? {isDivisibleByThree() ? "Yes" : "No"}
      </h2>
      <p class="text-4xl text-green-700 text-center py-20">
        Hello tailwind! Count: {count()}{" "}
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count() + 1)}
        >
          Increment
        </button>
        {secondCount()}{" "}
        <button
          class="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setSecondCount(secondCount() + 1)}
        >
          Increment Second Count
        </button>
      </p>
    </>
  );
};

export default App;
