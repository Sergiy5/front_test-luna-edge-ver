import { LogedInUser } from "./components/logedInUser/logedInUser";

export default function Home() {

  return (
    <main className="flex items-center justify-center h-lvh w-full">
      <div className="container w-full h-full"><LogedInUser /> </div>
    </main>
  );
}
