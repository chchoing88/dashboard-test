import React from "react";

import { Box, Text } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import UnitText from "component/atoms/unitText/UnitText";

import SmallText from "component/atoms/smallText/SmallText";
import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import VerticalBoundaryBar from "component/atoms/verticalBoundaryBar/VerticalBoundaryBar";

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
                  <UnitText>{unit}</UnitText>
                </EmpFigures>

                <RowGrid
                  css={{
                    margin: 0,
                    padding: "15px 0",
                    borderTop: "1px solid rgba(0,0,0,.1)"
                  }}
                >
                  <ColGrid
                    col={3}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SmallText>관심사</SmallText>
                    <Text>{status.interest}</Text>
                  </ColGrid>
                  <ColGrid
                    col={3}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SmallText>사용 업종</SmallText>
                    <Text>{status.poi}</Text>
                    <VerticalBoundaryBar
                      css={{
                        top: "10px"
                      }}
                    />
                  </ColGrid>
                  <ColGrid
                    col={3}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SmallText>소비</SmallText>
                    <Text>{status.consume}</Text>
                    <VerticalBoundaryBar
                      css={{
                        top: "10px"
                      }}
                    />
                  </ColGrid>
                </RowGrid>
              </>
            )}
          </ErrorBoundary>
        </LoadBoundary>
      </Box>
    </WidgetCard>
  );
}

export default StatusWidgetCard;
