import { createEffect, createSignal, type Component } from "solid-js";

const [count, setCount] = createSignal(0);

createEffect(() => {
  console.log("Count changed:", count());
});
const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      Hello tailwind! Count: {count()}{" "}
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
    </p>
  );
};

export default App;
