import React, { useEffect } from 'react';
import DisclaimerSection from '../components/DisclaimerSection';

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "免责声明与合规说明 - 机场搜";
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <main>
        <DisclaimerSection isSubPage={true} />
      </main>
    </div>
  );
}
