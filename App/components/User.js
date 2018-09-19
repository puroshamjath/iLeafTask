import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getUser, getTaks, getPosts } from '../actions/baseActions';
import Header from './utilities/Header';

class User extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUser();
        this.props.getTaks();
        this.props.getPosts();
    }

    render() {

        var taskLength = this.props.tasks == null ? '' : 'You have ' + this.props.tasks.length + ' requests to catch up today.';

        return (
            <View style={{ flex: 1 }}>
                <Header heading={this.props.user && this.props.user.first_name ? this.props.user.first_name : ""} />

                <View style={{ flex: 1, backgroundColor: '#f0f0f0' }} >

                    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }} >

                        <View>

                            <Image
                                style={{ width: 100, height: 100, borderRadius: 50 }}
                                source={{ uri: this.props.user == null ? 'https://facebook.github.io/react-native/docs/assets/favicon.png' : this.props.user.avatar }}
                            />

                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#796cfe', marginTop: 10 }} >{this.props.user == null ? '' : 'Hi ' + this.props.user.first_name + ','}</Text>

                            <Text style={{ fontSize: 12, color: '#000000', marginTop: 10 }} >{taskLength}</Text>

                        </View>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center' }} >

                        <View style={{}}>
                            <FlatList
                                data={this.props.tasks}
                                horizontal={true}
                                renderItem={({ item }) =>
                                    <View onPress={() => alert('amjath')} style={{ backgroundColor: 'white', marginLeft: 20, padding: 30, borderRadius: 5 }}>

                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>

                                        <Text style={{ fontSize: 10, marginTop: 5 }}>{item.subtitle}</Text>

                                        <View onPress={() => alert('amjath')} style={{ flexDirection: 'row', marginTop: 20 }} >

                                            <Text style={{ textAlign: 'center', fontSize: 10, backgroundColor: '#1c00ff', color: 'white', padding: 5, borderRadius: 5 }}>{item.tags[0]}</Text>

                                            <Text style={{ textAlign: 'center', fontSize: 10, backgroundColor: '#ff0085', color: 'white', marginLeft: 5, padding: 5, borderRadius: 5 }}>{item.tags[1]}</Text>

                                        </View>

                                    </View>
                                }
                                keyExtractor={(item, index) => index}
                            />
                        </View>

                    </View>

                    <Text style={{ marginLeft: 20, fontSize: 12, color: 'black' }}>Here are some blog posts you may like to read</Text>

                    <View style={{ flex: 1, justifyContent: 'center' }} >

                        <View style={{}}>
                            <FlatList
                                data={this.props.posts}
                                horizontal={true}
                                renderItem={({ item }) =>
                                    <View style={{ backgroundColor: 'white', marginLeft: 20, borderRadius: 5, overflow: 'hidden' }} >

                                        <Image
                                            style={{ width: '100%', height: 70 }}
                                            source={{ uri: item.image }}
                                        />

                                        <View style={{ paddingTop: 10, paddingLeft: 30, paddingRight: 30, paddingBottom: 10 }} >

                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>

                                            <Text style={{ fontSize: 10, marginTop: 5 }}>{item.subtitle}</Text>

                                        </View>

                                    </View>
                                }
                                keyExtractor={(item, index) => index}
                            />
                        </View>

                    </View>

                </View>
            </View>
        );
    }

}

const mapStateToProps = (state) => ({

    user: state.base.user,
    tasks: state.base.tasks,
    posts: state.base.posts

})

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
    getTaks: () => dispatch(getTaks()),
    getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)