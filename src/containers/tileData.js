import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});

function MainMenuItems(props) {
    const { classes } = props;
    return(
        <div>
            <MenuItem className={classes.menuItem} button>
                <ListItemIcon className={classes.icon}>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </MenuItem>
            <MenuItem className={classes.menuItem} button>
                <ListItemIcon className={classes.icon}>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="User List" />
            </MenuItem>
        </div>
    );
}

MainMenuItems.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuItems);