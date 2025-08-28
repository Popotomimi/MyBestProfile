import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-8">
      <NavigationMenu className="bg-transparent">
        <NavigationMenuList className="flex gap-16">
          {["Contact", "Resume", "About", "Certificate", "Projects"].map(
            (item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink className="rounded-lg" asChild>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-white py-1 px-5 bg-zinc-900 shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-colors hover:bg-zinc-900 hover:text-white">
                    {item}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
