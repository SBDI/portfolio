 const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Mohamed Bouabidi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
