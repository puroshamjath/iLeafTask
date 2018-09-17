import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {getUser,getTaks,getPosts} from '../actions/baseActions';
import Header from './utilities/Header';

class User extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getUser();
        this.props.getTaks();
        this.props.getPosts();
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header
                    heading={this.props.user && this.props.user.first_name ? this.props.user.first_name : ""}
                />
                {
                    this.props.user ? 
                    <View>
                        
                    </View>
                    : null
                }
            </View>
            );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    tasks: state.tasks,
    posts: state.posts
})
  
const mapDispatchToProps = (dispatch) =>({
    getUser: () => dispatch(getUser()),
    getTaks: () => dispatch(getTaks()),
    getPosts: () => dispatch(getPosts())
})
  
  export default connect(mapStateToProps,mapDispatchToProps)(User)