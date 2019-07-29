import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../../utils'
import {
  Cell,
  DataTable,
  Header,
  HeaderCell,
  Row,
  EditableCell,
  CheckableCell,
} from 'react-native-data-table';
import { Theme } from "../../comm";

export default class FinaceRow extends Component{
  render() {
    const {item = {} } = this.props
    // let rowStyle = item.no%2 === 0  ? styles.whiteRow : styles.row;
    let rowStyle = styles.whiteRow;
    return(
      <Row style={rowStyle}>
        <Cell style={[styles.cell, {borderLeftWidth: 1}]} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.no}
        </Cell>
        <Cell style={styles.cell} width={3} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.hy}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.hc}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.zyyw}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.zzc}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.rzje}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.rzfs}
        </Cell>
        <Cell style={styles.cell} width={3} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.zrbm}
        </Cell>
        <CheckableCell style={styles.cell} width={2}
                       isChecked = {true}
                       onPress = { () =>  this.props.onPress(item)}
                       renderIsChecked={() => {
                          return(
                            <View>
                              <Text style={{textAlign: 'center', color: Theme.darkTextColor }}>{item.xq}</Text>
                            </View>
                          )
                        }}
                       renderIsNotChecked={() => {
                         return(
                           <View>
                             <Text style={{ textAlign: 'center', color: Theme.darkTextColor }}>{item.xq}</Text>
                           </View>
                         )
                       }}
        >
        </CheckableCell>
      </Row>
    )
  }
}
/*
 style: ViewPropTypes.style,
  width: PropTypes.number,
  onPress: PropTypes.func,
  renderDisabled: PropTypes.func,
  renderIsChecked: PropTypes.func,
  renderIsNotChecked: PropTypes.func,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
<Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.xq}
        </Cell>
* */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
  },
  headerCell: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    justifyContent: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:3,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  alignTextLeft: {
    marginLeft: 20,
    textAlign: 'left',
  },
  whiteRow: {

    backgroundColor: 'white',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  row: {
    height: 35,

    borderColor: 'gray',
  },
  alignTextCenter: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});
