import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { queryGenerator } from "../lib/utils";
import { ArrowBigDown, PlusCircle } from "lucide-react";
import { useAppStore } from "../lib/zustend";

function Header() {
  const { setFilter } = useAppStore();
  const [items, setItems] = useState({
    draft: true,
    Paid: true,
    Panding: false, 
  });

  function handleChange(key) {
    setItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  useEffect(() => {
    const query = queryGenerator(items);
    setFilter(query); 
  }, [items.draft, items.Paid, items.Panding]);

  return (
    <header>
      <div className="base_container flex items-center justify-between py-[75px]">
        <div>
          <h1>Invoices</h1>
          <p>There are 7 total invoices</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto mr-[40px]" variant="ghost">
              Filter by status <ArrowBigDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Statuses</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col gap-3 px-2">
              {Object.entries(items).map(([key, value]) => (
                <label
                  key={key}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} justify-start capitalize flex items-center gap-2 cursor-pointer`}
                  htmlFor={key}
                >
                  <Checkbox
                    id={key}
                    checked={value}
                    onCheckedChange={() => handleChange(key)}
                  />
                  {key}
                </label>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button>
          <PlusCircle />
          New Invoice
        </Button>
      </div>
    </header>
  );
}

export default Header;
