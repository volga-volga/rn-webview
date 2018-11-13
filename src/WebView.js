// @flow

import React from 'react';
import {View, Text, Animated, TouchableOpacity, Share, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import {Interpolation} from "react-native/Libraries/Animated/src/AnimatedImplementation";

import ReloadIcon from './icons/reload.png';
import LeftArrowIcon from './icons/left-arrow.png';
import NextArrowIcon from './icons/next.png';
import ShareIcon from './icons/share.png';
import Close from './icons/cancel.png'

import style from './styles';

type Props = {
    source: string,
    style: ?any,
    renderHeader: () => void,
    renderLeftButton: () => void,
    renderFooter: () => void,
    renderFooterBtns: () => void,
    renderProgressBar: () => void,
    renderShare: () => void,
};

type State = {
    modalVisible: boolean,
    animationLoadingProgress: Animated.Value | Interpolation,
    isLoad: boolean,
    title: string
};

export default class WebViewComponent extends React.PureComponent<Props, State> {

    refWebView: ?WebView = null;

    state = {
        modalVisible: false,
        animationLoadingProgress: new Animated.Value(0),
        isLoad: false,
        title: '',
    };

    onShare = () => {
        Share.share({
            // message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: String(this.props.source),
            // title: 'Wow, did you see that?'
        })
    };

    onLoadEndWebView = () => {
        this.setState({
            isLoad: true,
        })
    };

    onLoadProgressWebView = (e) => {
        this.state.animationLoadingProgress.setValue(e.nativeEvent.progress);
    };

    onNavigationStateChangeWebView = (e) => {
        this.setState({
            title: e.url,
        })
    };

    onForward = () => {
        if (this.refWebView) {
            this.refWebView.goForward();
        }
    };

    onBack = () => {
        if (this.refWebView) {
            this.refWebView.goBack();
        }
    };

    renderLeftButton = () => {
        if (this.props.renderLeftButton) {
            return this.props.renderLeftButton();
        }
        return (
            <TouchableOpacity
                style={style.headerBtnClose}
                onPress={this.props.onClose}
            >
                <Image
                    source={Close}
                    style={style.headerBtnCloseIcon}
                />
            </TouchableOpacity>
        )
    };
    renderBtnReload = () => {
        return (
            <TouchableOpacity
                style={style.headerReloadBtn}
                onPress={() => {
                    if (this.refWebView) {
                        this.refWebView.reload();
                    }
                }}
            >
                <Image
                    source={ReloadIcon}
                    style={style.headerReloadBtnIcon}
                />
            </TouchableOpacity>
        )
    };
    renderHeader = () => {
        if (this.props.renderHeader) {
            return this.props.renderHeader();
        }
        return (
            <View style={style.header}>
                {this.renderLeftButton()}
                <View style={style.headerTextView}>
                    {
                        this.state.isLoad
                            ? <Text style={style.headerText} numberOfLines={1}>
                                {this.state.title}
                            </Text>
                            : <Text style={style.headerText}>...Loading</Text>
                    }
                </View>
                {this.renderBtnReload()}
            </View>
        )
    };

    renderProgressBar = () => {
        if (this.props.renderProgressBar) {
            return this.props.renderProgressBar();
        }

        const calcInterpolate = () => {
            return this.state.animationLoadingProgress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
            });
        };

        return (
            <View>
                <Animated.View
                    style={
                        {
                            backgroundColor: 'red',
                            width: calcInterpolate(),
                            ...style.progressBar,
                        }
                    }
                />
            </View>
        )
    };

    renderShare = () => {
        if (this.props.renderShare) {
            return this.props.renderShare();
        }
        return (
            <View
                style={style.footerShareView}
            >
                <TouchableOpacity
                    onPress={this.onShare}
                    style={style.footerShareBtn}
                >
                    <Image
                        source={ShareIcon}
                        style={style.footerShareBtnIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    };

    renderFooterBtns = () => {
        if (this.props.renderFooterBtns) {
            return this.props.renderFooterBtns();
        }
        return (
            <View style={style.footerBtnsView}>
                <TouchableOpacity
                    onPress={this.onBack}
                    style={style.footerBtn}
                >
                    <Image
                        source={LeftArrowIcon}
                        style={style.footerBtnIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onForward}
                    style={style.footerBtn}
                >
                    <Image
                        source={NextArrowIcon}
                        style={style.footerBtnIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    };

    renderFooter = () => {
        if (this.props.renderFooter) {
            return this.props.renderFooter();
        }
        return (
            <View style={style.footer}>
                {this.renderFooterBtns()}
                {this.renderShare()}
            </View>
        )
    };

    render() {
        return (
            <View style={style.container} >
                {this.renderHeader()}
                {this.renderProgressBar()}
                <WebView
                    {...this.props}
                    ref = {node => this.refWebView = node}
                    style={[style.webView, this.props.style]}
                    onNavigationStateChange={this.onNavigationStateChangeWebView}
                    onLoadProgress={this.onLoadProgressWebView}
                    onLoadEnd={this.onLoadEndWebView}
                />
                {this.renderFooter()}
            </View>
        );
    }
}

