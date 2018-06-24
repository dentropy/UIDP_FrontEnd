import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn style={{ fontWeight: 'bold', fontSize: '14px' }}>Contracts</TableHeaderColumn>
        <TableHeaderColumn style={{ fontWeight: 'bold', fontSize: '14px' }}>Name</TableHeaderColumn>
        <TableHeaderColumn style={{ fontWeight: 'bold', fontSize: '14px' }}>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>paper 1 </TableRowColumn>
        <TableRowColumn>complete</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>paper 2 </TableRowColumn>
        <TableRowColumn>incomplete</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>paper 1</TableRowColumn>
        <TableRowColumn>incomplete</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>paper 2</TableRowColumn>
        <TableRowColumn>complete</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>paper 1</TableRowColumn>
        <TableRowColumn>complete</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
export default TableSimple;