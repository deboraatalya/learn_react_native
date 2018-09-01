import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class Judul extends Component {
	render(){
		return (
				<Text style={salon.judul}>BIODATA</Text>
		)
	}
}
const salon	= {
	judul: {
		color: '#f00',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: '#0f0'
	}
}
export default Judul;