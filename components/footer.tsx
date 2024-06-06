import React from 'react';

const Footer: React.FC = () => {
    const TERMS = "Terms";
    const PRIVACY = "Privacy";
    const CONTACT = "Contact";
    const BOTTOM_TEXT = "© 2024 RestStop. All Rights Reserved. From RestStop";

  return (
    <footer className="flex-col justify-center items-center py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-sm flex space-x-4">
          <a className="hover:underline">
          {TERMS}
          </a>
          <a className="hover:underline">
          {PRIVACY}
          </a>
          <a className="hover:underline">
          {CONTACT}
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="text-xs text-center mt-4">
      {BOTTOM_TEXT}
      </div>
    </footer>
  );
};

export default Footer;