import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FaMusic, FaUserAlt, FaRecordVinyl, FaCalendarTimes, FaGuitar } from "react-icons/fa";
import API from "../../utils/API";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    API.getUserSongs().then(response => {
      setPlaylist(response.data[0].playlist);
    });
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> <FaMusic /> Track:</StyledTableCell>
            <StyledTableCell align="right"><FaUserAlt /> Artist:</StyledTableCell>
            <StyledTableCell align="right"><FaRecordVinyl /> Listeners:</StyledTableCell>
            <StyledTableCell align="right"><FaCalendarTimes /> Playcount:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {playlist.map((song) => (
            <StyledTableRow key={song.songName}>
              <StyledTableCell component="th" scope="row">
                {song.songName}
              </StyledTableCell>
              <StyledTableCell align="right">{song.artist}</StyledTableCell>
              <StyledTableCell align="right">{song.listeners}</StyledTableCell>
              <StyledTableCell align="right">{song.playcount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
