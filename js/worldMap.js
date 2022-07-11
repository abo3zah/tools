function invertColor(hex, bw) {

  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);

  if (bw) {
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
  }

  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);

  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function showTooltip(e,d) {
  //for tooltip 
  tooltip.classed("hidden", false)
    .html(d.properties.NAME_AR + "\nعدد السكان: " + d.properties.POP_EST.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    .attr("style", "left:"+(e.x+10)+"px;top:"+(e.y+10)+"px")
}


//adding the svg
const svg = d3.select("#SVGContainer")
  .append('svg')
  .attr('viewBox', '0 0 960 480')
  .attr('width','100%')
  .attr('height', '100%');

const width = svg.attr('width');
const height = svg.attr('height');

//selection of projection
const projection = d3.geoEquirectangular()

//selection of graticule
const graticule = d3.geoGraticule()
  .step([10, 10]);

const pathGenerator = d3.geoPath().projection(projection);

const tooltip = d3.select("#SVGContainer")
  .append("div")
  .attr("class", "tooltip hidden");

//color scale
const colorScale = d3.scaleOrdinal(d3.schemeSet3 )
/*const colorScale = d3.scaleLinear()
  .domain([0,240])
  .range(['green','yellow'])*/

const g = svg.append('g')
  .attr('transform','translate(0, -10)');

//zooming feature
svg.call(d3.zoom().on('zoom', e => {
  g.attr('transform', (transform = e.transform));
}));

function draw(yaw, countries, borders){

  projection.rotate([yaw])

  g.selectAll("*").remove();

  g.append('path')
  .attr('class', 'sphere')
  .attr('d', pathGenerator({
    type: 'Sphere'
  }));

  //add graticules
  g.selectAll('path.graticules')
    .data([graticule()])
    .enter()
    .append('path')
      .attr('d', d => pathGenerator(d))
      .attr('class','graticules')

  //add countries
  g.selectAll('path.country').data(countries.features)
    .enter()
    .append('path')
      .attr('d', d => pathGenerator(d))
      .attr('class', 'country')
      .attr('fill', d => colorScale(d.properties.MAPCOLOR9))
      .on("mousemove", (e,d) => showTooltip(e,d))
      .on("mouseout",()=>{tooltip.classed("hidden", true)})
      .on("touchstart", (e,d) => showTooltip(e,d))
      .on("touchmove", (e,d) => showTooltip(e,d));
      //.attr('fill', 'lightyellow')

  //add inner borders
  g.selectAll('path.borders').data(borders.features)
    .enter()
    .append('path')
      .attr('d', d => pathGenerator(d))
      .attr('class', 'borders');

  // g.selectAll('text.countryName').data(countries.features)
  //   .enter()
  //   .append('text')
  //     .filter(d => d.properties.LABELRANK < 5)
  //     .attr('class','countryName')
  //     .attr('unselectable','on')
  //     .attr('x', d => projection(d3.geoCentroid(d))[0])
  //     .attr('y', d => projection(d3.geoCentroid(d))[1])
  //     .attr('font-size',d => (Math.exp(d3.geoArea(d)) * 2) +'px')
  //     .text(d=>d.properties.NAME_AR);
}

//data fetching
Promise.all([
  d3.json('json/countries.geojson'),
  d3.json('json/borders.geojson')
]).then(([countriesInfo, borders]) => {

  var countries = countriesInfo;

  // console.log(countries);
  
  draw(-10, countries, borders)
})
