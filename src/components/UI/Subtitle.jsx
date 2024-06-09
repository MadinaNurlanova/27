import classes from './UIstyles.module.scss'
export default function Subtitle(props) {
    const {children} = props

    return (
        <p className={classes.subtitle}>{children}</p>
    )
}