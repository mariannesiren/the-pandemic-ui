import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3} style={{ margin: 0 }}>
        {/* Center map etc*/}
        <Grid
          item
          container
          xs={9}
          spacing={3}
          style={{ margin: 0, padding: 0 }}
        >
          <Grid item xs={3}>
            <Paper style={{ height: 80, padding: 20 }}>
              <Typography>Ensimmäinen boksi</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ height: 80, padding: 20 }}>
              <Typography>Toinen boksi</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ height: 80, padding: 20 }}>
              <Typography>Kolmas boksi</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ height: 80, padding: 20 }}>
              <Typography>Neljäs boksi</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: 350, padding: 20 }}>
              <Typography>Kartta</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Right side */}
        <Grid
          item
          container
          xs={3}
          spacing={3}
          style={{ margin: 0, padding: 0 }}
        >
          <Grid item xs={12}>
            <Paper style={{ height: '100%' }}>
              <Typography>Jee!</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: '100%' }}>
              <Typography>Jee!</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Slider */}
        <Grid item xs={12}>
          <Paper style={{ padding: 20, height: 80 }}>
            <Typography>Slider</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
