import styled from 'styled-components';

export const Container = styled.View`
	justify-content: center;
	align-items: center;
`;
export const ContainerColors = styled.View`
	justify-content: center;
	flex-direction: row;
	width: 100%;
	margin-bottom: 10px;
	align-items: center;
`;
export const ContainerColor = styled.View`
flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%
	`;
export const Color = styled.View`
	height: 10px;
	width: 10px;
	border-radius: 50px;
	background-color: ${props => props.color}
`;
export const TextColor = styled.Text`
	color: white;
`;

