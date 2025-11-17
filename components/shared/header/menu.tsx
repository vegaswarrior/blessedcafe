import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import UserButton from './user-button';

const Menu = () => {
  return (
    <div className='flex justify-end gap-3'>
      <nav className='hidden md:flex w-full max-w-xs gap-1'>
        <Button asChild variant='ghost'>
          <Link href='/cart'>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start bg-linear-to-r from-purple-400 via-teal-400 to-sky-400"'>
           <div className="hidden md:flex items-center justify-center text-white">
          <Link href='/' className="m-2.5 hover:text-black hover:underline">Home</Link>
          <Link href='/about' className="m-2.5 hover:text-black hover:underline">About</Link>
          <Link href='/blog' className="m-2.5 hover:text-black hover:underline">Blog</Link>
          <Link href='/contact' className="m-2.5 hover:text-black hover:underline">Contact</Link>
          <Link href='/products' className="m-2.5 hover:text-black hover:underline">Products</Link>
        </div>
            <Button asChild variant='ghost'>
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton />

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
