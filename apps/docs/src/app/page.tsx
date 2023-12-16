import { Navbar, ThemeToggle } from "@app-ds/ui";

export default function Page(): JSX.Element {
  return (
    <>
      <Navbar
        brand={<span className="font-bold">Application Design System</span>}
        toolbar={<ThemeToggle />}
      />
      <div></div>
    </>
  );
}
