"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SideMenu from "./side-menu";


const Header = () => {
    return (
        <header>
            <Card>
                <CardContent className="p-5 justify-between items-center flex flex-row">
                    <Link href="/">
                        <Image src="/Logo (1).png" alt="FSW BARBER" height={18} width={120} />
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon size={16} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </header>
    );
};

export default Header;