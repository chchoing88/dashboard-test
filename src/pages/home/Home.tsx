import React from "react";
import PageTemplate from "component/templates/pageTemplate/PageTemplate";

import TotalStatusInfo from "component/organisms/totalStatusInfo/TotalStatusInfo";
import TotalStatus from "component/organisms/totalStatus/TotalStatus";

function Home() {
  return (
    <PageTemplate>
      <TotalStatusInfo></TotalStatusInfo>
      <TotalStatus></TotalStatus>
    </PageTemplate>
  );
}

export default Home;
