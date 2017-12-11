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
 * @name RongCloudLibPlugin
 * @description
 * This plugin does something
 */

@Plugin({
  pluginName: 'RongCloudLibPlugin',
  plugin: 'cordova-plugin-rongcloud-im', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.rongCloudLibPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/rongcloud/cordova-plugin-rongcloud-im', // the github repository URL for the plugin
  platforms: ['Android', 'iOS']
})
export class RongCloudLibPlugin {

  // android && iOS
  @Cordova()
  static init(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static contect(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static reconnect(): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static disconnect(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setConnectionStatusListener(): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendTextMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendImageMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendVoiceMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendLocationMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendRichContentMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static sendCommandNotificationMessage(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setOnReceiveMessageListener(): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getConversation(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static removeConversation(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static clearConversations(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setConversationToTop(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getConversationNotificationStatus(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setConversationNotificationStatus(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getLatestMessages(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getHistoryMessages(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getHistoryMessagesByObjectName(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static deleteMessages(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static clearMessages(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getTotalUnreadCount(): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getUnreadCount(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getUnreadCountByConversationTypes(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setMessageReceivedStatus(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static clearMessagesUnreadStatus(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setMessageExtra(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getTextMessageDraft(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static saveTextMessageDraft(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static clearTextMessageDraft(options): Promise < any > { return; }


  // android && iOS
  @Cordova()
  static createDiscussion(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getDiscussion(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setDiscussionName(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static addMemberToDiscussion(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static removeMemberFromDiscussion(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static quitDiscussion(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setDiscussionInviteStatus(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static syncGroup(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static joinGroup(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static quitGroup(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static joinChatRoom(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static quitChatRoom(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static getConnectionStatus(): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static getRemoteHistoryMessages(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static setMessageSentStatus(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static getCurrentUserId(): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static addToBlacklist(options): Promise < any > { return; }

   // android && iOS
  @Cordova()
  static removeFromBlacklist(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getBlacklistStatus(options): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static getBlacklist(): Promise < any > { return; }

  // android && iOS
  @Cordova()
  static setNotificationQuietHours(options): Promise < any > { return; }

}
