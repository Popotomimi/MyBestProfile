import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const MobileMenu = () => {
  const menuItems = ["Contact", "Resume", "About", "Certificate", "Projects"];

  return (
    <div className="fixed top-6 right-6 z-50">
      <Menubar className="bg-transparent border-transparent">
        <MenubarMenu>
          <MenubarTrigger className="bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-600 transition-colors">
            <GiHamburgerMenu size={20} />
          </MenubarTrigger>

          <MenubarContent className="bg-purple-700 text-white rounded-lg shadow-lg border-none">
            {menuItems.map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`} passHref>
                <MenubarItem className="hover:bg-purple-600 cursor-pointer">
                  {item}
                  <MenubarSeparator />
                </MenubarItem>
              </Link>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MobileMenu;
