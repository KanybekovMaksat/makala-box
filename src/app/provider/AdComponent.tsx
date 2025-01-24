import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Add Google AdSense script to the page
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.setAttribute('data-ad-client', 'ca-pub-8305910163671053');
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Initialize adsbygoogle
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-8305910163671053"
         data-ad-slot="3851890453"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdComponent;
