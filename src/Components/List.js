import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  thead: {
    background:'#22b8cf',
    color:'white'
}
});

function createData(no, title, id, date, view) {
  return { no, title, id, date, view };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, '20/03/20', 24),
  createData(2, "Ice cream sandwich", 237, '20/03/20', 37),
  createData(3, "Eclair", 262, '20/03/20', 24),
  createData(4, "Cupcake", 305, '20/03/20', 67),
  createData(5, "Gingerbread", 356, '20/03/20', 49),
  createData(6, "Gingerbread", 356, '20/03/20', 49),
  createData(7, "Gingerbread", 356, '20/03/20', 49),
];

export default function List() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{ marginTop: "100px" }}>
      <Table className={classes.table}>
        <TableHead className={classes.thead}>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">View</TableCell>
            <TableCell align="center">Setting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.view}</TableCell>
              <TableCell align="center">
                <span><Button variant="contained" color="secondary">수정</Button></span>
                <span><Button variant="contained" color="primary" style={{marginLeft:'3px'}}>삭제</Button></span>
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
