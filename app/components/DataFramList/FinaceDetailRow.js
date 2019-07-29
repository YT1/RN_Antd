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
          {item.hy}
        </Cell>
        <Cell style={styles.cell} width={2} textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}>
          {item.hc}
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
