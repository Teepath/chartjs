import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles"

const styles = {
    root: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
        marginTop: "2px",
      marginLeft: "10px",
      "& td": {
        fontSize: "10px",
      },
      "& th": {
        fontSize: "12px",
        color: "#000",
      },

    },
    container: {
      height: "auto",
    },
};
  

const useStyle = makeStyles(styles);
function Tables ({ collections}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {

      setPage(newPage);
    };
  
    const classes = useStyle();
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
       
  
    // const handleClose = (value) => {
    //   setOpen(false);
    //   setSelectedValue(value);
    // };
  
    // const handleClickOpen = (data) => {
    //   setOpen(true);
    //   setSelectedValue(data);
    // };
  if (collections) {
    return (
      <Paper className={classes.root}>
        <div
          style={{
            fontWeight: "bold",
            padding: "10px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Sales
        </div>
        <TableContainer className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Customer Id
                </TableCell>
                <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                  Customer Name
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Country
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  City
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Category
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Profit
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Product Name
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Product Id
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Sales
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Segment
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  OrderID
                </TableCell>
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                >
                  Order Date
                </TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {collections &&
                collections
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((collection) =>
                    collection ? (
                      <TableRow
                        key={collection["Row ID"]}
                      >
                        <TableCell align="left">
                          {collection["Customer ID"]}
                        </TableCell>
  
                        <TableCell align="left">
                          {collection["Customer Name"]}
                        </TableCell>
                        <TableCell align="left"> {collection["Country"]}</TableCell>
                        <TableCell align="left"> {collection["City"]}</TableCell>
                        <TableCell align="left">
                        
                          {collection["Category"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Profit"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Product Name"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Product ID"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Sales"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Segment"]}
                        </TableCell>
                        <TableCell align="left">
                          {collection["Order ID"]}
                               
                        </TableCell>
                        <TableCell align="left">
                          {collection["Order Date"]}
                        </TableCell>
                      </TableRow>
                    ) : null
                  )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={collections.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
       
        </TableContainer>
      </Paper>
    );
  } else {
    return <div> Loading....</div>
  }
  }
  
  export default Tables;
