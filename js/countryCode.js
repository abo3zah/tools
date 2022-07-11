const dataFetch = async () => {
  try {
    const res = await d3.dsv(",", "csv/countryFullInfov2.csv", d3.autoType);
    return res
  } catch (err) {
    console.error(err);
  }
}

function dialogShow(str) {

  d3.select('.dialog').classed("hidden", false);

  d3.dsv(",", "csv/countryFullInfov2.csv", d3.autoType, (d) => {

    if (d['اسم الدولة'] == str) {
      var div = d3.select(".dialog");

      div.selectAll("*").remove();

      div.append('div')
        .attr('class','dialog-header')
        .append('span')
          .html('&#x2715;')

      div.append('img')
        .attr("src", d['الشعار'])
        .attr('width', '40%')
        .style('max-width', '300px')

      div.append('img')
        .attr("src", d['العلم'])
        .attr('width', '40%')
        .style('max-width', '300px')

      for (var element of Object.keys(d)) {

        if (element == 'العلم') {
          break;
        }

        div.append('span').text(element)

        if (element == 'الخريطة') {

          div.append('span')
            .append('a')
              .attr('href', d[element])
              .attr('target', '_blank')
              .attr('class', 'btn')
              .style('text-decoration','none')
              .html('&nbsp;الموقع&nbsp;')
        } else {
          div.append('span')
            .text(d[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }
      }

      d3.select('.dialog-header span').on('click', function() {
        d3.select('.dialog').classed("hidden", true);
      })
    }

  })
}

function hideContent(id){
  if (d3.select('#'+id+' .flex-container').style('display') == "flex"){
    d3.selectAll('#'+id+' .flex-container').style('display', 'none');
  }else{
    d3.selectAll('#'+id+' .flex-container').style('display', 'flex');
  }
}

dataFetch().then((data) => {


  continentArray = Array.from(d3.group(data, (d) => d['القارة']).keys())

  d3.select("div#main")
      .selectAll('div#continent')
      .data(continentArray)
      .enter()
        .append('div')
          .attr('id', (d) => d.replace(/\s/g, ''))
          .attr('class', 'grid-container')
          .append('h3')
            .attr('class', 'title clickable')
            .attr('onclick', (d) => 'hideContent("' + d.replace(/\s/g, '') + '")')
            .text(d => d)
  
  for (continent of continentArray) {    
    var selectedDiv = d3.select("div#" + continent.replace(/\s/g, ''))
      .append('div')
        .attr('class','flex-container')
        .selectAll('img')
        .data(d3.sort(d3.filter(data, d => d['القارة'] == continent),(a,b) => d3.descending(a['عدد السكان'],b['عدد السكان'])))
        .enter()
        .append('div')
          .attr('class', d => d['القارة'].replace(/\s/g, '') + ' p-3')

    selectedDiv.append('img')
      .attr('src', (d) => d['العلم'])
      .attr('width', "100%")
      .attr('height', "200px")
      .attr('onclick', (d) => "dialogShow('" + d['اسم الدولة'] + "')")
      .style('cursor', 'pointer')
      .style('border', '1px solid black')
      .style('object-fit', 'fill');

    selectedDiv.append('figcaption')
      .text((d) => d['اسم الدولة'])
      .style('text-align', 'center');
  }
});
