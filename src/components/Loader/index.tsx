import React from 'react'
import { Loader, Placeholder } from 'rsuite';

const MainLoader = () => (
  <div>
    <Placeholder.Paragraph rows={8} />
    <Loader center content="loading" />
  </div>
);

export default MainLoader;