import { Button } from "@/components/ui/button";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
    } from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";



export function AuthModal() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button>Try for Free</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[360px]">
            <DialogHeader className="flex flex-row items-center gap-2">
                <DialogTitle></DialogTitle>
                <Image 
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="size-10"
                />
                <h4 className="text-3xl font-semibold">
                    Cal<span className="text-primary">Marshal</span>
                </h4>
            </DialogHeader>

            <div className="flex flex-col mt-5 gap-3">
                <form 
                    className="w-full"
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <GoogleAuthButton />

                </form>

                <form 
                    className="w-full"
                    action={async () => {
                        "use server"
                        await signIn("github")
                    }}
                >
                    <GitHubAuthButton />

                </form>
                
            </div>

        </DialogContent>
    </Dialog>
  )
}
