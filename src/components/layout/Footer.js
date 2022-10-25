const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>Ryan Lee. All Rights Reserved &copy; {footerYear}</div>
    </footer>
  );
};

export default Footer;
