import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Menu, X, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link to="/" className="text-white hover:text-amber-400 transition-colors duration-300">
              BIDUA <span className="gradient-text">Beauty</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.home')}</a>
            <a href="#benefits" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.benefits')}</a>
            <a href="#ingredients" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.ingredients')}</a>
            <a href="#product-details" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.details')}</a>
            <a href="#testimonials" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.reviews')}</a>
            {isLoggedIn && (
              <>
                <Link to="/join-brpp" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.joinBrpp')}</Link>
                <Link to="/b2b-catalog" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.b2bCatalog')}</Link>
                <Link to="/partner-wallet" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base">{t('navigation.partnerWallet')}</Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            {isLoggedIn ? (
              <>
                <Link 
                  to="/user-profile" 
                  className="relative text-white hover:text-amber-400 transition-colors duration-300"
                  title={t('userProfile.title')}
                >
                  <User size={24} />
                </Link>
                <button 
                  onClick={handleLogout}
                  className="relative text-white hover:text-amber-400 transition-colors duration-300"
                  title={t('common.logout')}
                >
                  <LogOut size={24} />
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="relative text-white hover:text-amber-400 transition-colors duration-300"
                title={t('login.title')}
              >
                <User size={24} />
              </Link>
            )}
            <Link 
              to="/cart" 
              className="relative text-white hover:text-amber-400 transition-colors duration-300"
              title={t('cart.title')}
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-700 bg-black/95 backdrop-blur-lg rounded-lg mx-4">
            <div className="flex flex-col space-y-4 px-4">
              <div className="pb-4 border-b border-gray-700">
                <LanguageSwitcher />
              </div>
              <a href="#hero" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.home')}</a>
              <a href="#benefits" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.benefits')}</a>
              <a href="#ingredients" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.ingredients')}</a>
              <a href="#product-details" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.details')}</a>
              <a href="#testimonials" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.reviews')}</a>
              {isLoggedIn && (
                <>
                  <Link to="/join-brpp" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.joinBrpp')}</Link>
                  <Link to="/b2b-catalog" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.b2bCatalog')}</Link>
                  <Link to="/partner-wallet" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('navigation.partnerWallet')}</Link>
                </>
              )}
              {isLoggedIn ? (
                <>
                  <Link to="/user-profile" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('userProfile.title')}</Link>
                  <button onClick={handleLogout} className="w-full text-left text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg">{t('common.logout')}</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('login.title')}</Link>
                  <Link to="/signup" className="text-white hover:text-amber-400 transition-colors duration-300 py-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>{t('signup.title')}</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;