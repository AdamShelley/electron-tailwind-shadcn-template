import { toast } from "sonner";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  const showSonner = () => {
    toast.success("This is a message from Shadcn sonner!");
  };

  return (
    <main className="w-screen h-screen flex justify-center align-center">
      <div className="flex flex-col justify-center align-center">
        <h1 className="text-green-900 text-2xl">This is now tailwind text</h1>

        <p className="text-red-900 text-lg">This is a paragraph with tailwind text</p>
        <Button
          className="mt-10"
          variant="destructive"
          onClick={showSonner}
        >
          Shadcn buttons
        </Button>
      </div>
      <Toaster />
    </main>
  );
};

export default App;
