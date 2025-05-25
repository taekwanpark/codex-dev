import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between">
        <Link href="/" className="font-semibold">RentCar</Link>
        <div className="space-x-4">
          <Link href="/cars">차량</Link>
          <Link href="/admin">관리자</Link>
        </div>
      </div>
    </nav>
  );
}
