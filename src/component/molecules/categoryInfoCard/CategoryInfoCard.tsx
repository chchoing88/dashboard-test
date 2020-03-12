import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Box, Text } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import CategoryItem from "component/molecules/categoryItem/CategoryItem";
import ServiceTooltip from "component/molecules/serviceTooltip/ServiceTooltip";
import ReactTooltip from "react-tooltip";
import { IServiceItem } from "types";

const START_INDEX = 0;
const LAST_INDEX = 9;

type CategoryInfoCardProps = {
  title: string;
  tooltipId: string;
  // categoryList: IServiceItem[];
} & typeof defaultProps;

const defaultProps = {
  categoryList: [] as IServiceItem[]
};

function CategoryInfoCard({
  title,
  tooltipId,
  categoryList
}: CategoryInfoCardProps) {
  const $elemTooltip = useRef<ReactTooltip>(null);
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [categoryList]);

  const isCategoryList = categoryList.length > 0;

  return (
    <WidgetCard>
      <WidgetHeader title={title}></WidgetHeader>
      <Box sx={{ pb: 2 }}>
        {isCategoryList ? (
          <>
            {categoryList
              .slice(START_INDEX, LAST_INDEX)
              .map((categoryItem, index) => (
                <CategoryItem
                  key={categoryItem.categoryname}
                  tooltipId={tooltipId}
                  index={index}
                  categoryItem={categoryItem}
                ></CategoryItem>
              ))}

            <ReactTooltip
              ref={$elemTooltip}
              id={tooltipId}
              effect={"solid"}
              multiline={true}
              getContent={dataTip => (
                <ServiceTooltip services={dataTip}></ServiceTooltip>
              )}
              afterHide={() => {
                // issue : https://github.com/wwayne/react-tooltip/issues/219
                var node = ReactDOM.findDOMNode($elemTooltip.current);
                if (node && node instanceof HTMLElement) {
                  node.style.left = "0";
                  node.style.top = "0";
                }
              }}
            ></ReactTooltip>
          </>
        ) : (
          <Text sx={{ pt: "25px", color: "content", textAlign: "center" }}>
            정보가 없습니다.
          </Text>
        )}
      </Box>
    </WidgetCard>
  );
}

CategoryInfoCard.defaultProps = defaultProps;

export default CategoryInfoCard;
