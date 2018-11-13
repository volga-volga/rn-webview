import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 46,
    },
    headerBtnClose: {
        width: 46,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBtnCloseIcon: {
        width: Platform.select({
            ios: 18,
            android: 24
        }),
        height: Platform.select({
            ios: 18,
            android: 24
        }),
    },
    headerTextView: {
        flex: 1,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 16,
        //fontWeight: '600',
        textAlign: 'center',
    },
    headerReloadBtn: {
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerReloadBtnIcon: {
        width: Platform.select({
            ios: 18,
            android: 24
        }),
        height: Platform.select({
            ios: 18,
            android: 24
        }),
    },

    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 46,
        backgroundColor: '#fff',
    },
    footerBtnsView: {
        flexDirection: 'row',
        width: 90,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerBtn: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    footerShareView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 90,
    },
    footerShareBtn: {
        height: '100%',
        padding: 10,
    },
    footerShareBtnIcon: {
        width: Platform.select({
            ios: 22,
            android: 22
        }),
        height: Platform.select({
            ios: 22,
            android: 22
        }),
    },
    footerBtnIcon: {
        width: Platform.select({
            ios: 18,
            android: 26
        }),
        height: Platform.select({
            ios: 18,
            android: 26
        }),
    },


    progressBar: {
        height: 3,
    },
    webView: {
        flex: 1,
    },
});

export default styles;
