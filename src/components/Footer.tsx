import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.jpeg'

export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Moran Millers" className="h-12 w-12" />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-brand-green">Moran Millers Ltd</span>
                                <span className="text-xs text-muted-foreground">Think Unga, Think Moran!</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Premium Maize & Millet Flour for Every Kenyan Home
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                                About Us
                            </Link>
                            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
                                Products
                            </Link>
                            <Link to="/innovation" className="text-sm text-muted-foreground hover:text-foreground">
                                Innovation
                            </Link>
                            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                                Blog
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Contact Us</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-brand-green" />
                                <span className="text-sm text-muted-foreground">
                                    Ngong–Kiserian Road, Kajiado County
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-brand-green" />
                                <a href="tel:+254723821830" className="text-sm text-muted-foreground hover:text-foreground">
                                    +254 700 281 281
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-brand-green" />
                                <a href="mailto:info@moranmillers.co.ke" className="text-sm text-muted-foreground hover:text-foreground">
                                    millersmoran@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Follow Us</h3>
                        <div className="flex gap-3">
                            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            {/* <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
                <SiX className="h-5 w-5" />
              </a> */}
                            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025. Built with <Heart className="inline h-4 w-4 text-red-500" /> using{' '}
            <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              caffeine.ai
            </a>
          </p>
        </div> */}
            </div>
        </footer>
    );
}
