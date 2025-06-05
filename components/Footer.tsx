import { Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-5 w-5 mr-2" />
            <span className="font-semibold text-lg">Rangga Gibran</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Rangga Gibran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;