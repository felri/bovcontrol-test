import styled from 'styled-components';

export const Container = styled.View`
	flex: 3;
	justify-content: center;
	align-items: center;
`;

export const ContainerTemp = styled.View`
	flex: 1;
	margin-right: 5px;
	margin-left: 5px;
	justify-content: space-around;
	flex-direction: row;
	align-items: flex-start;
`;

export const TextItem = styled.Text`
	font-weight: bold;
	font-size: 25px;
	color: ${props => props.color ? props.color : 'white'}
`;

export const Label = styled.Text`
	color: white
`;

export const Date = styled.Text`
	color: white;
	font-size: 30px;
`;

export const ContainerInfo = styled.View`
	background-color: rgba(0, 0, 0, 0.2); 
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const ContainerDate = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ContainerTextTemp = styled.View`
	flex: 1;
	align-items: center
`;