import { Box, Button, Grid, Typography } from "@mui/material"
import { useDeleteContactMutation, useGetContactQuery } from "../redux/apis/contactsApi"
import { Link } from "react-router-dom"

export const ContactDetails = ({ id }: { id: string }) => {
    const { data } = useGetContactQuery(id)
    const [deleteContact] = useDeleteContactMutation()

    const deleteHandler = () => {
        if (!data) {
            return
        }
        deleteContact(data.id)

    }
    return (
        <>
            {/* <CardContent sx={{ justifyContent: "center" }}>
                <Typography variant="h6"> <b>ID:</b> {data?.id}</Typography>
                <Typography variant="h6"><b>Name:</b> {data?.name}</Typography>
                <Typography variant="h6"><b>Email:</b> {data?.email}</Typography>
            </CardContent>
            <Button onClick={deleteHandler} variant="contained" sx={{marginRight:2}}>
                Delete
            </Button>
                <Link to={`/updateContact/${id}`}>
                    <Button variant="contained">Update contact</Button>
                </Link> */}
                
            <Grid container spacing={1} >
                <Grid item xs={3} justifyContent="center">
                    <Typography variant="h6"> <b>ID:</b> {data?.id}</Typography>
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <Typography variant="h6"><b>Name:</b> {data?.name}</Typography>
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <Typography variant="h6"><b>Email:</b> {data?.email}</Typography>
                </Grid>
                <Box alignItems='center'>
                    <Button onClick={deleteHandler} variant="contained" sx={{ marginRight: 2 }}>
                        Delete
                    </Button>
                    <Link to={`/updateContact/${id}`}>
                        <Button variant="contained">Update contact</Button>
                    </Link>
                </Box>
            </Grid>
            
        </>
    )

}