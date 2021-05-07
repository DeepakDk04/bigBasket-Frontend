import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContnet: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default useStyles