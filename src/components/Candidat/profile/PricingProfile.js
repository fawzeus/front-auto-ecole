import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import Checkout from "./checkout/Checkout"
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  
}));
 
const tiers = [
  {
    title: 'Basic',
    price: '350 Dt',
    description: [
      "Free tests",
      "20 hours of driving",
      "10 hours of observation",
      "10 hours of highway code"
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  
  {
    title: "Best'OF",
    price: '650 Dt',
    description: [
      "Free tests",
      "Unlimited driving hours",
"Unlimited highway code",
"Unlimited hours of observation"
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Extra',
    subheader: 'Most popular',
    price: '500 Dt',
    description: [
      "Free tests",
      "30 hours of driving",
        "15 hours of observation",
        "Unlimited highway code",
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
];
const exams = [
  
  {
    title: 'Highway code exam ',
    price: '40 Dt',
    description: [
      "Once payment"
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Driving exam',
    price: '150 Dt',
    description: [
      "Once payment"
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },]
 
 
export default function PricingProfile({ price, setPrice, setPack}) {
  const classes = useStyles();
  let history= useHistory();
 
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          E-AUTO SCHOOL
          </Typography>
          
          <Button href="/" color="primary" variant="contained"  className={classes.link}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        have a driving license in your pocket at a very low price
       
        </Typography>
        <Typography variant="h6" align="center" color="primary" component="p">
        
        we offer you the session packages below
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12}  md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === "Best'OF" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /month
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary"
                 
                  onClick={() => { setPrice(tier.price);setPack(tier.title);history.push("/Checkout")  ;} }>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
 
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        
        <Typography variant="h6" align="center" color="primary" component="p">
        
        below the examination fees
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {exams.map((exam) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={exam.title}   xs={12} md={6}>
              <Card>
                <CardHeader
                  title={exam.title}
                  subheader={exam.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={exam.title === "Best'OF" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {exam.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /month
                    </Typography>
                  </div>
                  <ul>
                    {exam.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={exam.buttonVariant} color="primary"
                  
                  onClick={() => {setPrice(exam.price);setPack(exam.title); history.push("/Checkout")  ; } }>
                    {exam.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </React.Fragment>
  );
}
 
