import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from 'react-native-material-color';
import FeatherIcons from 'react-native-vector-icons/Feather';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const ChatDetails = () => {
  const [textChat, setTextChat] = useState('');

  return (
    <LinearGradient
      colors={['#D1C4E9', '#8C9EFF']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.linearGradient}>
      <LinearGradient
        colors={['#C5CAE9', '#C5CAE9']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.linearGradientContent}>
        <View style={styles.chatContent}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.useSender}>
                <View style={styles.senderTextContent}>
                  <Text style={styles.senderChatText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, ut? Amet, aut porro. Nemo, ut? Amet, aut porro, Nemo,
                    ut? Amet, aut porro.
                  </Text>
                </View>
                <Text style={styles.senderDate}> 12:00</Text>
              </View>
              <View style={styles.useReceiver}>
                <View style={[styles.receiverTextContent]}>
                  <Text style={styles.receiverChatText}>
                    Lorem ipsum dolor sit amet elit. sit amet elit. sit amet
                    elit. sit amet elit.
                  </Text>
                </View>
                <Text style={styles.receiverDate}> 01:00</Text>
              </View>
              <View style={styles.useSender}>
                <View style={styles.senderTextContent}>
                  <Text style={styles.senderChatText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, ut? Amet, aut porro. Nemo, ut? Nemo, ut? Amet, aut
                    porro.
                  </Text>
                </View>
                <Text style={styles.senderDate}> 12:00</Text>
              </View>
              <View style={styles.useReceiver}>
                <View style={styles.receiverTextContent}>
                  <Text style={styles.receiverChatText}>
                    Lorem ipsum dolor sit amet elit.
                  </Text>
                </View>
                <Text style={styles.receiverDate}> 01:00</Text>
              </View>
              <View style={styles.useReceiver}>
                <View
                  style={[
                    styles.receiverTextContent,
                    styles.receiverFileContent,
                  ]}>
                  <View style={styles.receiverFile}>
                    <FeatherIcons name="folder" size={20} color={Color.WHITE} />
                    <Text
                      style={[
                        styles.receiverChatText,
                        styles.receiverChatFileText,
                      ]}>
                      Portfolio.pdf
                    </Text>
                    <OcticonsIcons
                      name="download"
                      size={20}
                      color={Color.WHITE}
                    />
                  </View>
                  <Text style={styles.receiverFileSize}> 2 MB</Text>
                </View>
                <Text style={styles.receiverDate}> 01:00</Text>
              </View>
              <View style={styles.sendChatText}>
                <AntDesignIcons
                  name="addfolder"
                  size={20}
                  color={Color.GREY[700]}
                  style={styles.addFile}
                />
                <TextInput
                  style={styles.chatInput}
                  onChangeText={setTextChat}
                  value={textChat}
                  placeholder="send chat"
                  keyboardType="default"
                />
                <FeatherIcons
                  name="send"
                  size={20}
                  color={Color.GREY[700]}
                  style={styles.sendText}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
    // paddingHorizontal: 25,
  },
  linearGradient: {
    flex: 1,
  },
  chatContent: {
    flex: 1,
    // backgroundColor: Color.WHITE,
    position: 'relative',
    // height: 700,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  linearGradientContent: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  useSender: {
    paddingBottom: 10,
    paddingLeft: 10,
  },
  useReceiver: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  senderTextContent: {
    marginLeft: 20,
    marginRight: 50,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  receiverTextContent: {
    marginLeft: 130,
    marginBottom: 5,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Color.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  receiverFileContent: {
    backgroundColor: Color.BLUE[700],
  },
  receiverFile: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  receiverFileSize: {
    paddingLeft: 35,
    fontSize: 10,
    fontWeight: 'bold',
    color: Color.WHITE,
  },
  senderDate: {
    marginLeft: 20,
  },
  receiverDate: {
    marginLeft: 320,
  },
  senderChatText: {
    lineHeight: 18,
  },
  receiverChatText: {
    lineHeight: 18,
    // color: Color.GREY[500],
  },
  receiverChatFileText: {
    lineHeight: 18,
    color: Color.GREY[400],
    paddingRight: 60,
  },
  addFile: {
    paddingTop: 15,
  },
  sendText: {
    paddingTop: 15,
  },
  chatInput: {
    flex: 1,
    color: Color.BLACK,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 20,
  },
  sendChatText: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 80,
  },
});
