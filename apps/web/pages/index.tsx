import { Button } from "ui";
import { SplitLayout } from "../components";


export default function Web() {
  return (
    <SplitLayout>
      <div className="w-full min-h-full h-max flex flex-col items-center">
        <h1>Web</h1>
        <Button onClick={() => console.log("Pressed!")} text="Boop" />
      </div>
    </SplitLayout>
  );
}
