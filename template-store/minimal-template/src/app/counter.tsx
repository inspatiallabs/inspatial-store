import { createState, $ } from "@inspatial/kit/state";
import { View, YStack } from "@inspatial/kit/structure";
import { Text, List, Button } from "@inspatial/kit/widget";

export function Counter() {
  /*################################(Props)################################*/
  interface EntryProps {
    id: number;
    name: string;
  }

  /*################################(State)################################*/
  const count = createState(0);
  const message = $(() => `Count is: ${count.value}`);

  const entries = createState<EntryProps[]>([
    { id: 1, name: "Hot reload test working Base! 🔥" },
    { id: 2, name: "DOM renderer is running 🦵" },
    { id: 3, name: "Interactivity is a check ✅" },
  ]);

  /*################################(Render)################################*/
  return (
    <View>
      <YStack
        style={{
          web: {
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            margin: "0",
          },
        }}
      >
        <Text size="lg">InSpatial ✦ Kit!</Text>
        <List each={entries} track="id">
          {(entry: EntryProps) => <Text>{entry.name}</Text>}
        </List>
        <Button
          // style={{
          //   web: {
          //     backgroundColor: "purple",
          //   },
          // }}
          on:tap={() => count.value++}
        >
          {message}
        </Button>
      </YStack>
    </View>
  );
}
