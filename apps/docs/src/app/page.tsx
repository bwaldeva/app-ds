import { Navbar, MaterialSymbol } from "@app-ds/ui";

export default function Page(): JSX.Element {
  return (
    <>
      <Navbar />
      <div>
        Hello, World! <MaterialSymbol symbol="home" />
      </div>
    </>
  );
}
