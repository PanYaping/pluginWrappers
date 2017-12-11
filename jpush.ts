/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name JPush
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { JPush } from 'ionic-native';
 *
 * JPush.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
    pluginName: 'JPush',
    plugin: 'jpush-phonegap-plugin', // npm package name, example: cordova-plugin-camera
    pluginRef: 'plugins.jPushPlugin', // the variable reference to call the plugin, example: navigator.geolocation
    repo: 'https://github.com/jpush/jpush-phonegap-plugin', // the github repository URL for the plugin
    platforms: ['Android', 'iOS']
})
export class JPush {

    // android && iOS
    @Cordova()
    static init(): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static stopPush(): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static resumePush(): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static isPushStopped(): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static getRegistrationID(): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static setTagsWithAlias(tags, alias): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static setTags(tags): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static setAlias(alias): Promise<any> { return; }

    // android && iOS
    @Cordova()
    static getUserNotificationSettings(): Promise<any> { return; }

    // iOS
    @Cordova()
    static startJPushSDK(): Promise<any> { return; }

    // iOS
    @Cordova()
    static setBadge(value): Promise<any> { return; }

    // iOS
    @Cordova()
    static resetBadge(): Promise<any> { return; }

    // iOS
    @Cordova()
    static setApplicationIconBadgeNumber(badge): Promise<any> { return; }

    // iOS
    @Cordova()
    static getApplicationIconBadgeNumber(): Promise<any> { return; }

    // iOS
    @Cordova()
    static addLocalNotificationForIOS(delayTime, content, badge, notificationID, extras): Promise<any> { return; }

    // iOS
    @Cordova()
    static deleteLocalNotificationWithIdentifierKeyInIOS(identifierKey): Promise<any> { return; }

    // iOS
    @Cordova()
    static clearAllLocalNotifications(): Promise<any> { return; }

    // iOS
    @Cordova()
    static startLogPageView(pageName): Promise<any> { return; }

    // iOS
    @Cordova()
    static stopLogPageView(pageName): Promise<any> { return; }

    // iOS
    @Cordova()
    static beginLogPageView(pageName, duration): Promise<any> { return; }

    // iOS
    @Cordova()
    static setDebugModeFromIos(): Promise<any> { return; }

    // iOS
    @Cordova()
    static setLogOFF(): Promise<any> { return; }

    // iOS
    @Cordova()
    static setCrashLogON(): Promise<any> { return; }

    // iOS
    @Cordova()
    static setLocation(latitude, longitude): Promise<any> { return; }

    // iOS
    @Cordova()
    static isPlatformIOS(): Promise<any> { return; }

    // iOS
    @Cordova()
    static addDismissActions(actions: Array<any>, categoryId?): Promise<any> { return; }

    // iOS
    @Cordova()
    static addNotificationActions(actions, categoryId): Promise<any> { return; }

    // android
    @Cordova()
    static setDebugMode(mode): Promise<any> { return; }

    // android
    @Cordova()
    static receiveMessageInAndroidCallback(data): Promise<any> { return; }

    // android
    @Cordova()
    static openNotificationInAndroidCallback(data): Promise<any> { return; }

    // android
    @Cordova()
    static setStatisticsOpen(bool): Promise<any> { return; }

    // android
    @Cordova()
    static reportNotificationOpened(msgID): Promise<any> { return; }

    // android
    @Cordova()
    static clearAllNotification(): Promise<any> { return; }

    // android
    @Cordova()
    static clearNotificationById(notificationId): Promise<any> { return; }

    // android
    @Cordova()
    static setPushTime(days, startHour, endHour): Promise<any> { return; }

    // android
    @Cordova()
    static setSilenceTime(startHour, startMinute, endHour, endMinute): Promise<any> { return; }

    // android
    @Cordova()
    static setLatestNotificationNum(num): Promise<any> { return; }

    // android
    @Cordova()
    static addLocalNotification(builderId, content, title,
        notificaitonID, broadcastTime, extras): Promise<any> { return; }

    // android
    @Cordova()
    static removeLocalNotification(notificationID): Promise<any> { return; }

    // android
    @Cordova()
    static clearLocalNotifications(): Promise<any> { return; }

}
