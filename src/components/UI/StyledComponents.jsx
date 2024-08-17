import styled from "styled-components";

const primaryColor = "#4CAF50";
const secondaryColor = "#008CBA";
const dangerColor = "#F44336";
const warningColor = "#FF9800";
const textColor = "#333";
const backgroundColor = "#F9F9F9";
const borderRadius = "5px";
const boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: ${borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${boxShadow};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${boxShadow};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};

  &:hover {
    background-color: darken(${primaryColor}, 10%);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${secondaryColor};

  &:hover {
    background-color: darken(${secondaryColor}, 10%);
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${dangerColor};

  &:hover {
    background-color: darken(${dangerColor}, 10%);
  }
`;

export const WarningButton = styled(Button)`
  background-color: ${warningColor};

  &:hover {
    background-color: darken(${warningColor}, 10%);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: ${borderRadius};
  border: 1px solid #ccc;
  margin-right: 10px;
  flex-grow: 1;
  max-width: 400px;
  box-shadow: ${boxShadow};

  &:focus {
    border-color: ${primaryColor};
    outline: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 500px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  background-color: ${backgroundColor};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
`;

export const TodoText = styled.span`
  flex-grow: 1;
  font-size: 18px;
  color: ${textColor};
  margin-right: 15px;
`;

export const EditInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: ${borderRadius};
  border: 1px solid #ccc;
  flex-grow: 1;
  margin-right: 15px;
  box-shadow: ${boxShadow};

  &:focus {
    border-color: ${secondaryColor};
    outline: none;
  }
`;
