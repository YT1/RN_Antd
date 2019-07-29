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

export default class EnterpriseRow extends Component{
  render() {
    const {item = {} } = this.props
    // let rowStyle = item.no%2 === 0  ? styles.whiteRow : styles.row;
    let rowStyle = styles.whiteRow;
    return(
      <Row style={rowStyle}>
        <Cell style={[styles.cell, {borderLeftWidth: 1}]} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.no}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.date}
        </Cell>
        <Cell style={styles.cell} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.currentMouth}
        </Cell>
        <Cell style={styles.cell} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.zengRate}
        </Cell>
        <Cell style={styles.cell} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.hRate}
        </Cell>
        <Cell style={styles.cell} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.zRate}
        </Cell>
        <Cell style={styles.cell} width={1} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.gRate}
        </Cell>
      </Row>
    )
  }
}
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
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 3,
    borderColor: 'gray',
  },
  alignTextLeft: {
    marginLeft: 20,
    textAlign: 'left',
  },
  whiteRow: {
    height: 35,
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
