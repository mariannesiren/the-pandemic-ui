import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { getCountriesByDate } from '../utils/get-countries-by-date';
import { options } from './options';

import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const useStyles = makeStyles((theme) => ({
    mapContainer: {
      height: 550,
      padding: theme.spacing(2),
    },
}));

const WorldMap =({
  coronaData,
  endDate,
  selected,
}: {
  coronaData: [];
  endDate: Date;
  selected: number;
}) => {

    const classes = useStyles();

    const selectedType: string = options[selected].name.toLowerCase();
    let s = selectedType as 'confirmed' | 'active' | 'deaths' | 'recovered';

    const topCountries = getCountriesByDate(coronaData, endDate, s);
    const topCountry = topCountries[1];

    const getRange = function(max: number) {
      const increment = max / (10 - 1)
      return [0, ...Array(10 - 2).fill('').map((_, index) => 
        0 + (increment * (index + 1))
      ), max]
    }

    const setColor = function(name: string) {
      let countryName: string = name.toLowerCase();

      if (countryName.indexOf("united states of america") > -1) {
        countryName = "us";
      }

      let found = topCountries.find(obj => {
        return obj.label === countryName;
      });

      let range = getRange(topCountry.value);
      
      if (found) {
        return found.value >= range[9] ? '#3A1830' :
        found.value >= range[8]  ? '#34234B' :
        found.value >= range[7]  ? '#43395D' :
        found.value >= range[6]  ? '#534E70' :
        found.value >= range[5]   ? '#646482' :
        found.value >= range[4]   ? '#7A7D94' :
        found.value >= range[3]   ? '#9096A6' :
        found.value >= range[2]   ? '#A6ADB8' :
        found.value >= range[1]   ? '#BCC4CA' : '#D2D9DC';
      } else {
        return '#D2D9DC';
      }
    }

    return (
      <Grid item xs={12}>
          <Paper className={classes.mapContainer}>
            <ComposableMap data-tip="" width={800} height={600} projectionConfig={{}}>
              <ZoomableGroup>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: setColor(geo.properties.NAME),
                            outline: "none"
                          },
                        }}
                      />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      </Paper>
    </Grid>     
    );
};

export default WorldMap;