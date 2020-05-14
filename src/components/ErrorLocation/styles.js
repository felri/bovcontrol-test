import styled from 'styled-components';

export const Container = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: red;
	z-index: 20;
	justify-content: center;
	align-items: center;
`;

export const TextError = styled.Text`
	color: white;
	margin-top: 20px;
	font-size: 18px;
`;

export const TextBtn = styled.Text`
	color: white;
	font-size: 18px;
`;

export const BtnError = styled.View`
	border-radius: 10px;
	background-color: #6e34d3;
	margin-top: 20px;
	justify-content: center;
	padding: 15px;
	align-items: center;
	display: flex;
`;
