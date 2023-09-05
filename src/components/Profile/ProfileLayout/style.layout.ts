import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 15%;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`