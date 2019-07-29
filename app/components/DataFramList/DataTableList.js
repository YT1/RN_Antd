import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  ListView,
} from 'react-native';
import {
  Cell,
  DataTable,
  Header,
  HeaderCell,
  Row,
  EditableCell,
  CheckableCell,
} from 'react-native-data-table';
import EnterpriseRow from './EnterpriseRow'
import FinaceRow from './FinaceRow'
import FinaceDetailRow from './FinaceDetailRow'
import { Theme } from '../../comm'


export default class DataTableList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: this.ds,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }


  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  render() {
    const { daraArr = [] } = this.props


    return (
      <View style={styles.container}>
        <DataTable
          style={styles.container}

          dataSource={this.state.ds.cloneWithRows(daraArr)}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }

  renderHeader() {
        const { headerArr = [] } = this.props
    return (
      <Header>
        {headerArr.map((res, index) => {
          return(
            <HeaderCell
              style={[styles.headerCell, {borderLeftWidth: index === 0 ? 1 : 0}]}
              textStyle={{ textAlign: 'center', color: Theme.darkTextColor }}
              key={index + 1}
              text={res.name}
              width={res.width}
              isAscending={false}
              isSelected={false}
              onPress={() => this.onColumnSort()}
            />
          )
        })}
      </Header>
    );
  }
  renderRow(item) {
        switch (item.type) {
          case 'display':
            return (
              <EnterpriseRow item={item}/>
            );
          case 'tap':
            return(
              <FinaceRow item={item} onPress={(itemx) => this.props.onPress(itemx)}/>
            );
          case 'detail_display':
            return(
              <FinaceDetailRow item={item}/>
            );
        }

  }
/*
*
* <EditableCell width={1} value={item.gRate} onEndEditing={(target, value) => {}}>
        </EditableCell>
* */
  onCheckablePress() {}

  onColumnSort() {}

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
    padding: 3,
    backgroundColor: 'white',
    borderColor: 'gray',
    justifyContent: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
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
