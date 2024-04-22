import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold text-green-500 text-center mb-4">
        Hello Lingo
      </p>
      <ClerkLoading>
        <Loader className="m-auto h-5 w-5 text-muted-foreground animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <div className="flex flex-col gap-1">
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="primary">Get Started</Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="primaryOutline">
                Already have an account? Sign in
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <Link href="/learn" className="w-full">
            <Button size="lg" variant="secondary" className="w-full">
              Continue Learning
            </Button>
          </Link>
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
}