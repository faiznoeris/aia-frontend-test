import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
})

export default function ImgMediaCard(props) {
    const { imgData } = props
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {imgData.title}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                        dangerouslySetInnerHTML={{
                            __html: imgData.description,
                        }}
                    />
                    <br />
                    {imgData.tags.split(' ').map(val => `${val} `)}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
