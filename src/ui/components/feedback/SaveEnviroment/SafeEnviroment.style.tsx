import { styled } from "@mui/material/styles";

export const SafeEnvironmentContainer = styled("div")`
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  font-size: 12px;
`;
