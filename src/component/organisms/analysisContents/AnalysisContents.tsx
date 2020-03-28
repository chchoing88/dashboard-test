import React, { memo } from "react";

import { Box } from "rebass";
import InfoCardGroup from "component/organisms/infoCardGroup/InfoCardGroup";
import ProfileGroup from "component/organisms/profileGroup/ProfileGroup";
import PaymentGroup from "component/organisms/paymentGroup/PaymentGroup";
import CategoryInfoGroup from "component/organisms/categoryInfoGroup/CategoryInfoGroup";
import ContentTitle from "component/atoms/contentTitle/ContentTitle";
import ContentSubTitle from "component/atoms/contentSubTitle/ContentSubTitle";

import LoadBoundary from "component/common/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/common/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";
import IntroAnalysis from "component/molecules/introAnalysis/IntroAnalysis";

import { IRandomUserResponse, IAPIError } from "types";

type AnalysisContentsProps = {
  analysisData: IRandomUserResponse | undefined;
  error: IAPIError;
  isLoading: boolean;
};

function AnalysisContents({
  analysisData,
  error,
  isLoading
}: AnalysisContentsProps) {
  return !analysisData && !isLoading && !error ? (
    <IntroAnalysis></IntroAnalysis>
  ) : (
    <LoadBoundary isLoading={isLoading}>
      <ErrorBoundary error={error} errorComponent={<StatusError />}>
        {analysisData && (
          <>
            <Box sx={{ mt: 5 }}>
              <ContentTitle>프로파일 정보</ContentTitle>
              <InfoCardGroup
                useInfoData={analysisData.profileinfo.userinfo}
              ></InfoCardGroup>
            </Box>
            <Box sx={{ mt: 6 }}>
              <ProfileGroup
                profileData={analysisData.profileinfo}
              ></ProfileGroup>
            </Box>
            <Box sx={{ mt: 5 }}>
              <ContentTitle>결제 정보</ContentTitle>
              <PaymentGroup
                paymentData={analysisData.consumeinfo}
              ></PaymentGroup>
            </Box>
            <Box sx={{ mt: 5 }}>
              <ContentTitle>
                사용 서비스 정보
                <ContentSubTitle>
                  각 카테고리에 마우스를 올리면 세부 정보를 확인할 수 있습니다
                </ContentSubTitle>
              </ContentTitle>
              <CategoryInfoGroup
                categoryData={analysisData.serviceinfo}
              ></CategoryInfoGroup>
            </Box>
          </>
        )}
      </ErrorBoundary>
    </LoadBoundary>
  );
}

export default memo(AnalysisContents);
