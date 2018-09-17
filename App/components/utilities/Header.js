import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TextInput, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { widthPercentageToDP as widthDP, heightPercentageToDP as heightDP } from './pixel-calculator';
class Header extends Component {
	constructor(props) {
		super(props);
}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor="#796cfe"
				/>
				<View style={styles.statusBarBackground}/> 
				<View style={[styles.header, { height: 50 }]} >
					{
						this.props.leftIconText && this.props.leftIconText != "" ?
						<TouchableOpacity style={styles.leftIcon} onPress={this.props.goBack}>
							<Image style={{ height: 16, alignSelf: 'center' }} resizeMode='contain' source={require('../../assets/images/left_arrow.png')} />
							<Text style={styles.back}>{this.props.leftIconText ? this.props.leftIconText : ""}</Text>
						</TouchableOpacity>
						: null
					}
					{
						this.props.heading ?
							<Text style={styles.verify}>{this.props.heading}</Text>
							: null
					}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: (Platform.OS === 'ios') ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
		backgroundColor: "red",
	  },
	container: {
		backgroundColor: '#796cfe'
	},
	leftIcon: {
		position: 'absolute',
		left: 20,
		top: 8,
		flexDirection: 'row',
		height: 32,
		width: 60,
		alignSelf: 'center'
	},
	verify: {
		color: '#ffffff',
		fontSize: 21,
		marginTop: 10
	},
	header: {
		position: 'relative',
		width: widthDP('100%'),
		backgroundColor: '#796cfe',
		alignItems: 'center'
	},
	back: {
		color: '#ffffff',
		fontSize: 19,
		left: 7,
		top: 3
	}
});

export default Header