import {StyleSheet, Dimensions} from 'react-native';
import { widthPercentageToDP as widthDP, heightPercentageToDP as heightDP } from '../../components/utilities/pixel-calculator';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const mobileVerification = StyleSheet.create({
        container: {
            backgroundColor: '#ffffff',
            flex: 1,
            flexDirection: 'column'
        },
        verify:{
            color: '#ffffff',
            fontSize: 19
        },
        otpImg: {
            marginTop: widthDP('14%'),
            alignSelf:'center',
            width:125,
            height:125
        },
        mobText: {
            fontSize: 19,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: heightDP('4%')
        },
        intro: {
            fontSize: 14,
            textAlign: 'center',
            paddingTop: heightDP('4%'),
            color: '#737373',
            paddingBottom: heightDP('3%')
        },
        intro_otp:{
            fontSize: 14,
            textAlign: 'center',
            paddingTop:2,
            color: '#737373'
        },
        intro1:{
            fontSize: 14,
            textAlign: 'center',
            color: '#737373',
            paddingBottom: heightDP('3%')
        },
        next: {
            alignSelf: 'center',
            position:'absolute',
            bottom:40,
            width: 98
        },
        terms: {
            alignSelf: 'center',
            fontSize: 13,
            position:'absolute',
            bottom:0
        },
        otp_code: {
            width: widthDP('9%'),
            textAlign: 'center',
            borderWidth:1,
            fontSize:17,
            fontWeight:'bold',
            borderRadius:5,
            marginRight: 15
        },
        country_code: {
            width: 40,
            textAlign: 'center',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom:4,
            marginBottom:7
        },
        country_no: {
            marginLeft: 5,
            textAlign: 'center',
            width: 150,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom:4,
            marginBottom:7
        },
        red: {
            borderColor: 'red'
        },
        grey: {
            borderColor: 'grey'
        },
        terms_otp: {
            textAlign: 'center',
            alignSelf:'center',
            fontSize: 14,
            color:'red',
            fontWeight:'bold',
            bottom:0,
            position:'absolute'
        }
});