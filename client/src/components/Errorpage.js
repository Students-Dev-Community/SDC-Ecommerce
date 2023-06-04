import classes from "./Errorpage.module.css"
function ErrorPage() {
  return (
    <>
      <main>
        <div className={classes.Error}>404</div>
        <p className={classes.subhead}>Page Not Found</p>
        <p className={classes.Footer}>The page you looking for doesnt exist or an error occured. Go to Homepage</p>
      </main>
    </>
  );
}

export default ErrorPage;