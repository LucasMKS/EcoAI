import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost m-1">
        {language === 'pt' ? 'PT' : 'EN'}
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><a onClick={() => setLanguage('en')}>English</a></li>
        <li><a onClick={() => setLanguage('pt')}>Português</a></li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;