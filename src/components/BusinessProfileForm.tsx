import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building, MapPin, CreditCard, UploadCloud, FileText } from 'lucide-react';

const BusinessProfileForm = () => {
  const { t } = useTranslation();
  const [firmName, setFirmName] = useState('');
  const [firmType, setFirmType] = useState('proprietor');
  const [address, setAddress] = useState('');
  const [pan, setPan] = useState('');
  const [gstin, setGstin] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [kycDocs, setKycDocs] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Business Profile:', {
      firmName, firmType, address, pan, gstin, bankAccount, ifsc, kycDocs
    });
    alert(t('brpp.businessProfile.submitSuccess'));
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 lg:p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Building className="w-6 h-6 mr-3 text-amber-400" />
        {t('brpp.businessProfile.title')}
      </h2>
      <p className="text-gray-400 mb-6 text-sm">{t('brpp.businessProfile.subtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Firm/Company Name */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.firmName')}
          </label>
          <input
            type="text"
            value={firmName}
            onChange={(e) => setFirmName(e.target.value)}
            className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
            placeholder={t('brpp.businessProfile.enterFirmName')}
            required
          />
        </div>

        {/* Firm Type */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.firmType')}
          </label>
          <select
            value={firmType}
            onChange={(e) => setFirmType(e.target.value)}
            className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300"
            required
          >
            <option value="proprietor">{t('brpp.businessProfile.firmTypes.proprietor')}</option>
            <option value="partnership">{t('brpp.businessProfile.firmTypes.partnership')}</option>
            <option value="llp">{t('brpp.businessProfile.firmTypes.llp')}</option>
            <option value="pvt_ltd">{t('brpp.businessProfile.firmTypes.pvtLtd')}</option>
            <option value="other">{t('brpp.businessProfile.firmTypes.other')}</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.address')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
              placeholder={t('brpp.businessProfile.enterAddress')}
              required
            />
          </div>
        </div>

        {/* PAN */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.pan')}
          </label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
            placeholder={t('brpp.businessProfile.enterPan')}
            required
          />
        </div>

        {/* GSTIN (Optional) */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.gstin')} ({t('common.optional')})
          </label>
          <input
            type="text"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
            placeholder={t('brpp.businessProfile.enterGstin')}
          />
        </div>

        {/* Bank Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              {t('brpp.businessProfile.bankAccount')}
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                placeholder={t('brpp.businessProfile.enterBankAccount')}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              {t('brpp.businessProfile.ifsc')}
            </label>
            <input
              type="text"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
              className="w-full bg-black/50 border border-gray-600 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
              placeholder={t('brpp.businessProfile.enterIfsc')}
              required
            />
          </div>
        </div>

        {/* KYC Docs Upload */}
        <div>
          <label className="block text-gray-300 font-medium mb-2">
            {t('brpp.businessProfile.kycDocs')}
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-xl cursor-pointer bg-black/50 hover:bg-gray-700/50 transition-colors duration-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-8 h-8 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-400">
                  <span className="font-semibold">{t('brpp.businessProfile.clickToUpload')}</span> {t('brpp.businessProfile.orDragAndDrop')}
                </p>
                <p className="text-xs text-gray-500">{t('brpp.businessProfile.fileTypes')}</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" multiple onChange={(e) => setKycDocs(e.target.files)} />
            </label>
          </div>
          {kycDocs && kycDocs.length > 0 && (
            <div className="mt-4 text-gray-300 text-sm">
              <p className="font-medium">{t('brpp.businessProfile.uploadedFiles')}:</p>
              <ul className="list-disc list-inside">
                {Array.from(kycDocs).map((file, index) => (
                  <li key={index} className="flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-gray-500" /> {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105"
        >
          {t('brpp.businessProfile.submitButton')}
        </button>
      </form>
    </div>
  );
};

export default BusinessProfileForm;