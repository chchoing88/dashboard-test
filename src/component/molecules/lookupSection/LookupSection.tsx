import React from "react";

import { Text, Button } from "rebass";
import SectionTitle from "component/atoms/sectionTitle/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { ButtonClickHandler } from "types";
type LookupSection = {
  onClick: ButtonClickHandler;
};

function LookupSection({ onClick }: LookupSection) {
  return (
    <>
      <SectionTitle
        css={{
          float: "left"
        }}
      >
        사용자 프로파일 조회
      </SectionTitle>
      <Button sx={{ mt: "-3px", bg: "point" }} onClick={onClick}>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <Text as="span" sx={{ pl: 2 }}>
          랜덤 유저 조회
        </Text>
      </Button>
    </>
  );
}

export default LookupSection;
