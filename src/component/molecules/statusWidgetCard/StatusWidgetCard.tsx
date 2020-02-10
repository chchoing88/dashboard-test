import React from "react";

import { Text, Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import StatusSubList from "component/molecules/statusSubList/StatusSubList";

import LoadBoundary from "component/atoms/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/atoms/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";

import { IAPIError, IUFOStatus } from "types";

type StatusWidgetCardProps = {
  status: IUFOStatus | null;
  error: IAPIError;
  title: string;
  unit: string;
  isLoading: boolean;
};

function StatusWidgetCard({
  status,
  title,
  unit,
  error,
  isLoading
}: StatusWidgetCardProps) {
  const subList = [
    {
      title: "관심사",
      figure: status ? status.interest : 0
    },
    {
      title: "사용 업종	",
      figure: status ? status.poi : 0
    },
    {
      title: "소비",
      figure: status ? status.consume : 0
    }
  ];

  return (
    <WidgetCard>
      <WidgetHeader title={title}></WidgetHeader>
      <Box
        sx={{
          minHeight: "192px"
        }}
      >
        <LoadBoundary css={{ paddingTop: "65px" }} isLoading={isLoading}>
          <ErrorBoundary isError={!!error} errorComponent={<StatusError />}>
            {status && (
              <>
                <EmpFigures
                  figure={status.overall}
                  css={{
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    textAlign: "center"
                  }}
                >
                  <Text
                    as="span"
                    sx={{
                      fontSize: 2,
                      color: "content"
                    }}
                  >
                    {unit}
                  </Text>
                </EmpFigures>
                <StatusSubList subList={subList}></StatusSubList>
              </>
            )}
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </WidgetCard>
  );
}

export default StatusWidgetCard;
