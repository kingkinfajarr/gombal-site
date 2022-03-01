import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative">
      <div className="text-center fixed bottom-0 left-0 right-0 mb-8 font-semibold">
        <p>
          Created by{' '}
          <Link
            href="https://github.com/kingkinfajarr"
            className="text-green-btn underline"
          >
            Kingkin Fajar
          </Link>
        </p>
        <p>
          with{' '}
          <Link href="https://nextjs.org" className="text-green-btn underline">
            Next JS
          </Link>{' '}
          and{' '}
          <Link
            href="https://tailwindcss.com"
            className="text-green-btn underline"
          >
            Tailwind CSS
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
