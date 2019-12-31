import styled from 'styled-components';

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
})``;

export const TabItem = styled.View``;

export const TabText = styled.View``;
