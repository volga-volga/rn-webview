# rn-webview

## Before Used
Make sure you have installation [react-native-webview](https://github.com/react-native-community/react-native-webview)

## Installation
>        npm install --save vvdev-rn-webview

## Usage
>        import WebViewComponent from 'vvdev-rn-webview';
>        
>        /*...*/
>        
>        render() {
>          <WebViewComponent
>            source={{uri: 'https://www.youtube.com/....'}}
>          />
>        }

## Props
| Prop | Description | Type |
| --- | --- | --- |
| source | Link to Web Page | String |
| style | Style attributes | Object |
| renderHeader | Function that is returned by jsx | Function |
| renderLeftButton | Function that is returned by jsx | Function |
| renderFooter | Function that is returned by jsx | Function |
| renderFooterBtns | Function that is returned by jsx | Function |
| renderProgressBar | Function that is returned by jsx | Function |
| renderShare | Function that is returned by jsx | Function |

