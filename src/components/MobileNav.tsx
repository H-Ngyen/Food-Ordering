import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNav() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to FoodOrder.com</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button
                        className="flex-1 font-bold bg-orange-500"
                        onClick={async () => await loginWithRedirect()}
                    >
                        Log in</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
};