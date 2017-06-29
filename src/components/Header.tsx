import * as React from "react"
import { List, ListItem } from "material-ui/List"
import Divider from "material-ui/Divider"
import FontIcon from "material-ui/FontIcon"
import Avatar from "material-ui/Avatar"
import { Game } from "../lib/game"

const iconStyle = {
    marginRight: 12
}

const scheduleIcon = <FontIcon className="material-icons" style={iconStyle}>schedule</FontIcon>
const titleIcon = <FontIcon className="material-icons" style={iconStyle}>golf_course</FontIcon>
const playerIcon = <FontIcon className="material-icons" style={iconStyle}>people</FontIcon>
const blackAvatar = <Avatar size={30}>先</Avatar>
const whiteAvatar = <Avatar size={30}>後</Avatar>

export const Header = ({ game }: { game: Game }) => {
    let header = game.getHeader()
    return (
        <List>
            <ListItem primaryText={header["開始日時"]} leftIcon={scheduleIcon} disabled={true} />
            <ListItem primaryText={header["棋戦"]} leftIcon={titleIcon} disabled={true} />
            <Divider inset={true} />
            <ListItem
                primaryText={header["先手"]}
                secondaryText={"(残り時間)"}
                leftAvatar={blackAvatar}
                disabled={true}
            />
            <ListItem
                primaryText={header["後手"]}
                secondaryText={"(残り時間)"}
                leftAvatar={whiteAvatar}
                disabled={true}
            />
        </List>
    )
}

export default Header
