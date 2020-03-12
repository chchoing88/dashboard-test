import React, { useCallback } from "react";
import useApiObservable from "hooks/useApiObservable";
import { randomUserApi } from "api";

import AnalysisTemplate from "component/templates/AnalysisTemplate";
import AnalysisInfo from "component/organisms/analysisInfo/AnalysisInfo";
import AnalysisContents from "component/organisms/analysisContents/AnalysisContents";
import LookupSection from "component/molecules/lookupSection/LookupSection";
import { IRandomUserResponse } from "types";

function Analysis() {
  const [randomState, subject$] = useApiObservable(randomUserApi.fetch);
  const onClickHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      subject$.next(e);
    },
    [subject$]
  );

  const responseStatus = randomState.success?.response as
    | IRandomUserResponse
    | undefined;

  return (
    <AnalysisTemplate
      title={<AnalysisInfo></AnalysisInfo>}
      lookUp={<LookupSection onClick={onClickHandler}></LookupSection>}
      contents={
        <AnalysisContents
          analysisData={responseStatus}
          error={randomState.error}
          isLoading={randomState.isLoading}
        ></AnalysisContents>
      }
    ></AnalysisTemplate>
  );
}

export default Analysis;
