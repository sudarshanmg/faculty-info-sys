import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.layout__}>
        {props.children}
    </div>
  )
}

export default Layout