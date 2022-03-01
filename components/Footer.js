const Footer = () => {
  return (
    <div className="relative">
      <div className="text-center fixed bottom-0 left-0 right-0 mb-8 font-semibold">
        <p>
          Created by{' '}
          <a
            href="https://github.com/kingkinfajarr"
            className="text-green-btn underline"
          >
            Kingkin Fajar
          </a>
        </p>
        <p>
          with{' '}
          <a href="https://nextjs.org" className="text-green-btn underline">
            Next JS
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com"
            className="text-green-btn underline"
          >
            Tailwind CSS
          </a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
