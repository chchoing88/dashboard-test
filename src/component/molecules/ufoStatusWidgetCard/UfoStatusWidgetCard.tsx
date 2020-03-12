import React from "react";
import { zeroValueToDash } from "utils";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import EmpFigures from "component/atoms/empFigures/EmpFigures";
import UnitText from "component/atoms/unitText/UnitText";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import VerticalBoundaryBar from "component/atoms/verticalBoundaryBar/VerticalBoundaryBar";

import LoadBoundary from "component/atoms/loadBoundary/LoadBoundary";
import ErrorBoundary from "component/atoms/errorBoundary/ErrorBoundary";
import StatusError from "component/atoms/statusError/StatusError";

import SubUfoStatus from "component/molecules/subUfoStatus/SubUfoStatus";

import { IAPIError, IUFOStatus } from "types";

type UfoStatusWidgetCardProps = {
  status: { [key in keyof IUFOStatus]: string } | null;
  error: IAPIError;
  title: string;
  unit: string;
  isLoading: boolean;
};

function UfoStatusWidgetCard({
  status,
  title,
  unit,
  error,
  isLoading
}: UfoStatusWidgetCardProps) {
  return (
    <WidgetCard>
      <WidgetHeader title={title}></WidgetHeader>
      <Box
        sx={{
          minHeight: "186px"
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
                    col={4}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SubUfoStatus
                      title="관심사"
                      figure={zeroValueToDash(status.interest)}
                    ></SubUfoStatus>
                  </ColGrid>
                  <ColGrid
                    col={4}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SubUfoStatus
                      title="서비스 업종"
                      figure={zeroValueToDash(status.poi)}
                    ></SubUfoStatus>
                    <VerticalBoundaryBar
                      css={{
                        top: "10px"
                      }}
                    />
                  </ColGrid>
                  <ColGrid
                    col={4}
                    css={{
                      paddingLeft: "24px"
                    }}
                  >
                    <SubUfoStatus
                      title="소비"
                      figure={zeroValueToDash(status.consume)}
                      isNew={true}
                    ></SubUfoStatus>
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

export default UfoStatusWidgetCard;
