import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between p-4 my-5">
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </>
  );
};

export default Nav;
