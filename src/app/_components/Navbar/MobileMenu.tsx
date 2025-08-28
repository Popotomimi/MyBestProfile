import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Menubar className="bg-transparent border-transparent">
        <MenubarMenu>
          <MenubarTrigger className="bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-600 transition-colors">
            <GiHamburgerMenu size={20} />
          </MenubarTrigger>

          <MenubarContent className="bg-purple-700 text-white rounded-lg shadow-lg border-none">
            <MenubarItem className="hover:bg-purple-600">Contact</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-purple-600">Resume</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-purple-600">About</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-purple-600">
              Certificate
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-purple-600">Projects</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MobileMenu;
