import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex">
      <Link href="/">
        <a className="px-2 py-1 bg-gray-800 text-cool-gray-600 hover:text-cool-gray-500">
          elrypto.dev
        </a>
      </Link>
      <div className="flex items-center justify-between flex-1 px-2 bg-gray-800">
        <nav className="flex" />

        <div className="flex items-center my-1">
          <div className="relative w-64" />
        </div>
      </div>
    </header>
  );
};

export default Header;
