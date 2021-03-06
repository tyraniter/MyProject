import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem, StyleProvider, Thumbnail} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import { connect } from 'react-redux';

//个人信息组件
class ProfileScreen extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>个人信息</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="face"/>
                                </Left>
                                <Body>
                                    <Text>头像</Text>
                                </Body>
                                    <Image source={require('../resource/image/default_face.png')} />
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="tag-faces"/>
                                </Left>
                                <Body>
                                    <Text>昵称</Text>
                                </Body>
                                <Right>
                                    <Text></Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="person"/>
                                </Left>
                                <Body>
                                    <Text>姓名</Text>
                                </Body>
                                <Right>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="picture-in-picture"/>
                                </Left>
                                <Body>
                                    <Text>实名认证</Text>
                                </Body>
                                <Right>
                                    <Text>已认证</Text>
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="phone-android"/>
                                </Left>
                                <Body>
                                    <Text>手机号</Text>
                                </Body>
                                <Right>
                                    <Text>{this.props.user.phoneNumber}</Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Setting')}>
                                <Left>
                                    <Icon name="build"/>
                                </Left>
                                <Body>
                                    <Text>电信用户</Text>
                                </Body>
                                <Right>
                                    <Text>未绑定</Text>
                                    <Icon name="chevron-right" />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

function select(store){
    return {
        user: store.user.user,
  }
}

export default connect(select)(ProfileScreen);