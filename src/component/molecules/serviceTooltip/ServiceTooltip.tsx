import React from "react";
import { Box } from "rebass";

type ServiceTooltipProps = {
  services: string | undefined;
};

function ServiceTooltip({ services }: ServiceTooltipProps) {
  const serviceList = services ? services.split("-") : [];
  return (
    <Box as="ul" sx={{ py: "6px" }}>
      {serviceList.map(serviceItem => (
        <Box key={serviceItem} as="li">
          {serviceItem}
        </Box>
      ))}
    </Box>
  );
}

export default ServiceTooltip;
