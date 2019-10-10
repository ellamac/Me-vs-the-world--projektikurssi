import React, { useState } from 'react';
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryLine,
  createContainer
} from 'victory';

class Results extends React.Component {
  //zoomausta
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [1970, 2017] }
    };
  }
  //zoomausta
  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    //suomalaisten vuosipalkkojen ka 1970-2017
    const data = this.props.salaries; //country (id, value); value; year
    //zoomin ja voronoin yhdistelmä
    const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');
    //data käyttäjän syötämälle palkalle
    const salaryFromInput = this.props.userSalary;
    return (
      <div>
        <VictoryChart
          width={750} //taulukon levey
          height={470} //korkeus
          //zoomaus ja voronoi (tooltip tyyppinen toiminto)
          containerComponent={
            <VictoryZoomVoronoiContainer
              //mitä labelissä lukee
              labels={
                ({ datum }) =>
                  datum.year == null // käyttäjän syötteessä vuosi on tyhjä
                    ? `Your yearly salary is ${Math.round(salaryFromInput)}€` //käyttäjän label
                    : `${datum.year}: ${Math.round(datum.value)}€/year` //datan label
              }
              //zoomataan x-akselia
              zoomDimension='x'
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryArea
            //taulukossa käytetty data
            data={data}
            //x-akseliin year sarakkeen tiedot
            x='year'
            //y-akseliin value sarakkeen tiedot
            y='value'
            //pienimmästä suurimpaan
            sortOrder='descending'
          />
          <VictoryAxis tickCount={10} /*x-akselissa tikkiä*/ />
          <VictoryAxis dependentAxis tickCount={30} /*y-akselissa 30 tikkiä*/ />
          <VictoryLine
            //käyttäjän palkka viivana
            //muotoilu
            style={{
              data: { stroke: 'tomato', strokeWidth: 3 }
            }}
            //viivan yhtälö (y=palkka)
            y={() => salaryFromInput}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Results;
