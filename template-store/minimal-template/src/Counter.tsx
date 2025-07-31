import { createSignal, $, derivedExtract, List } from "@inspatial/run";

export function Counter() {
  console.log("Counter component initializing...");
  const count = createSignal(0);
  // Create a computed signal for the text
  const message = $(() => `Count is: ${count.value}`);

  const entries = createSignal([
    { id: 1, name: "Hot reload test working Base! 🔥" },
    { id: 2, name: "DOM renderer is running 🦵" },
    { id: 3, name: "Interactivity is a check ✅" },
  ]);

  return (
    <>
      <div style="display:flex;height:100vh;flex-direction:column;justify-content:center;align-items:center;gap:2.5rem;">
        <h1 style="color:oklch(62.7% 0.265 303.9);font-size:6rem;font-weight:inherit;margin:0;padding:0;">
          🚀 InSpatial Run!
        </h1>
        <List each={entries} track="id" unkeyed={true}>
          {({ item }) => {
            const { name } = derivedExtract(item);
            return <p style="font-size:1.5rem;padding:0;margin:0;">{name}</p>;
          }}
        </List>
        <button
          type="button"
          id="increment"
          style="background-color:oklch(62.7% 0.265 303.9);color:white;font-size:1.5rem;padding:1.25rem;border-radius:10rem;border:none;cursor:pointer;"
          on:click={() => count.value++}
        >
          {message}
        </button>
      </div>
    </>
  );
}
//: oklch(55.8% 0.288 302.321)
