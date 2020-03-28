import React from "react";
import { Box } from "rebass";
import styled, { css } from "styled-components";

const LoginInfoItem = styled.li`
  position: relative;
  padding-left: 8px;
  line-height: 1.67;
  margin-bottom: 3px;
  color: #666;
  & > a {
    display: inline-block;
    color: #2265ec;
    margin-left: 7px;
    text-decoration: underline;
  }
  &:after {
    position: absolute;
    top: 7px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: #b7b7b7;
    content: "";
  }
`;

function LoginInfo() {
  return (
    <Box
      as="ul"
      css={css`
        padding: 20px;
        margin-top: 15px;
        background: rgba(0, 0, 0, 0.02);
        border: 1px solid rgba(0, 0, 0, 0.04);
        word-spacing: -1px;
        border-radius: 4px;
        color: #777;
        font-size: 12px;
      `}
    >
      <LoginInfoItem>카카오크루 누구나 접속 가능합니다.</LoginInfoItem>
      <LoginInfoItem>
        UFO 대시보드는 Mac OS 크롬 기반으로 제공됩니다
      </LoginInfoItem>
      <LoginInfoItem>
        일부 카카오 공동체의 경우 서비스 로그인 되지 않을 수 있습니다.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://kakao.agit.in/g/433695/wall/320719664"
        >
          문의하기
        </a>
      </LoginInfoItem>
    </Box>
  );
}

export default LoginInfo;
