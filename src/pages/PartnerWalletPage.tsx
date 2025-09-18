import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Wallet, DollarSign, Clock, CheckCircle, TrendingUp, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const PartnerWalletPage = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();

  // Static placeholder data
  const availableBalance = 124000;
  const escrowPending = 15000;
  const totalRealized = 150000;

  const realizations = [
    {
      id: 'real-001',
      sku: 'BIDUA Radiance 15',
      serialNo: 'SN-21',
      b2cPrice: 1400,
      partnerCost: 1000,
      profitShare: 240,
      costReimbursed: 1000,
      status: 'confirmed',
      confirmedAt: '2024-09-10',
    },
    {
      id: 'real-002',
      sku: 'BIDUA Radiance 15',
      serialNo: 'SN-22',
      b2cPrice: 1400,
      partnerCost: 1000,
      profitShare: 240,
      costReimbursed: 1000,
      status: 'confirmed',
      confirmedAt: '2024-09-10',
    },
    {
      id: 'real-003',
      sku: 'BIDUA Radiance 15',
      serialNo: 'SN-23',
      b2cPrice: 1400,
      partnerCost: 1000,
      profitShare: 240,
      costReimbursed: 1000,
      status: 'escrow_pending',
      returnWindowEnds: '2024-09-25',
    },
    {
      id: 'real-004',
      sku: 'BIDUA Radiance 15 (Pack of 3)',
      serialNo: 'SN-101',
      b2cPrice: 4000,
      partnerCost: 2800,
      profitShare: 720,
      costReimbursed: 2800,
      status: 'escrow_pending',
      returnWindowEnds: '2024-09-28',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <LogIn className="w-24 h-24 text-gray-600 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">{t('partnerWallet.loginRequired.title')}</h1>
          <p className="text-gray-400 mb-8 text-lg">{t('partnerWallet.loginRequired.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 transform hover:scale-105"
            >
              {t('login.loginButton')}
            </Link>
            <Link 
              to="/signup" 
              className="border-2 border-amber-400/50 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
            >
              {t('signup.signupButton')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>{t('common.backToHome')}</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Wallet className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('partnerWallet.title')}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('partnerWallet.subtitle')}
          </p>
        </div>

        {/* Wallet Balances */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 text-center">
            <DollarSign className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <p className="text-gray-300 text-sm">{t('partnerWallet.availableBalance')}</p>
            <p className="text-white text-3xl font-bold">{formatPrice(availableBalance)}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 text-center">
            <Clock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <p className="text-gray-300 text-sm">{t('partnerWallet.escrowPending')}</p>
            <p className="text-white text-3xl font-bold">{formatPrice(escrowPending)}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 text-center">
            <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-300 text-sm">{t('partnerWallet.totalRealized')}</p>
            <p className="text-white text-3xl font-bold">{formatPrice(totalRealized)}</p>
          </div>
        </div>

        {/* Withdrawal Section */}
        <div className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-3xl p-6 lg:p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{t('partnerWallet.withdrawFunds')}</h2>
          <p className="text-amber-200 text-sm mb-6">{t('partnerWallet.withdrawDescription')}</p>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/30 transition-all duration-300 transform hover:scale-105">
            {t('partnerWallet.requestWithdrawal')}
          </button>
        </div>

        {/* Realization History */}
        <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-3 text-amber-400" />
            {t('partnerWallet.realizationHistory')}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.sku')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.serialNo')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.b2cPrice')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.partnerCost')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.profitShare')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.costReimbursed')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.status')}</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">{t('partnerWallet.table.date')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {realizations.map((realization) => (
                  <tr key={realization.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{realization.sku}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{realization.serialNo}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{formatPrice(realization.b2cPrice)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{formatPrice(realization.partnerCost)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400">{formatPrice(realization.profitShare)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-blue-400">{formatPrice(realization.costReimbursed)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        realization.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {t(`partnerWallet.status.${realization.status}`)}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                      {realization.status === 'confirmed' ? realization.confirmedAt : realization.returnWindowEnds}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWalletPage;