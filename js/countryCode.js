const dataFetch = async () => {
  try {
    const res = await d3.dsv(",", "csv/countryFullInfov3.csv", d3.autoType);
    return res
  } catch (err) {
    console.error(err);
  }
}

function dialogShow(str) {

  d3.select('#dialog').classed("hidden", false);
  d3.select('#main').classed("hidden", true);

  d3.dsv(",", "csv/countryFullInfov3.csv", d3.autoType, (d) => {

    if (d['اسم الدولة'] == str) {
      var div = d3.select("#dialog");

      div.selectAll("*").remove();

      div.append('div')
        .attr('class','col-span-full bg-zinc-500 max-h-8 p-0.5 text-left')
        .append('span')
          .attr('class','w-full text-white text-left bg-red-800 py-1 px-2 text-xs cursor-pointer font-bold hover:brightness-110 rounded')
          .html('&#x2715;')
          .attr('onclick', 'd3.select("#dialog").classed("hidden", true);d3.select("#main").classed("hidden", false);')

      div.append('img')
        .attr("src", d['الشعار'])
        .attr('class', 'w-[50%] max-h-[300px] block mx-auto mb-2')

      div.append('img')
        .attr("src", d['العلم'])
        .attr('class', 'w-[50%] max-h-[300px] block mx-auto bg-slate-100 mb-2')

      for (var element of Object.keys(d)) {

        if (element == 'العلم') {
          break;
        }

        div.append('div')
          .attr('class','text-center border-t border-l border-black font-bold bg-amber-100 font-mono grid items-center')
          .append('span')
            .text(element)

        if (element == 'الخريطة') {

          div.append('div')
            .attr('class','text-center border-t border-black bg-white font-bold font-mono grid items-center justify-center')
            .append('a')
              .attr('href', d[element])
              .attr('target', '_blank')
              .attr('class', 'bg-blue-800 text-white hover:brightness-110 px-2 py-1 rounded')
              .style('text-decoration','none')
              .html('&nbsp;الموقع&nbsp;')
        } else {
          div.append('div')
            .attr('class','text-center border-t border-black bg-white font-bold font-mono grid items-center')
            .append('span')
              .text(d[element].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

        }
      }

      d3.select('.dialog-header span').on('click', function() {
        d3.select('#dialog').classed("hidden", true);
      })
    }

  })
}

function hideContent(id){

  selectedItem = d3.select('#'+id+' > div')
  if (selectedItem.classed('hidden')){
    selectedItem.classed('hidden', false);
  }else{
    selectedItem.classed('hidden', true);
  }
}

d3.select('#dialog').classed("hidden", true);

dataFetch().then((data) => {


  continentArray = Array.from(d3.group(data, (d) => d['القارة']).keys())

  // continents structure
  d3.select("div#main")
      .selectAll('div#continent')
      .data(continentArray)
      .enter()
        .append('div')
          .attr('id', (d) => d.replace(/\s/g, ''))
          .attr('class', 'grid grid-cols-1 border border-black m-4')
          .append('h3')
            .attr('class', 'text-center col-span-full bg-black text-white py-1 px-0 m-0 cursor-pointer font-bold text-2xl')
            .attr('onclick', (d) => 'hideContent("' + d.replace(/\s/g, '') + '")')
            .text(d => "قارة " + d)
  
  // populating each continent with the countries
  for (continent of continentArray) {    
    var selectedDiv = d3.select("div#" + continent.replace(/\s/g, ''))
      .append('div')
        .attr('class','py-4 grid md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-4')
        .selectAll('img')
        .data(d3.sort(d3.filter(data, d => d['القارة'] == continent),(a,b) => d3.descending(a['عدد السكان'],b['عدد السكان'])))
        .enter()
        .append('div')
          .attr('class', 'p-3 relative')

    selectedDiv.append('img')
      .attr('src', (d) => d['العلم'])
      .attr('class', "rounded-xl border border-black cursor-pointer w-full h-full max-h-52")
      .attr('onclick', (d) => "dialogShow('" + d['اسم الدولة'] + "')")

    selectedDiv.append('div')
      .attr('class', 'hidden md:block absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 bg-gray-800 rounded-xl transition duration-500')
      .attr('onclick', (d) => "dialogShow('" + d['اسم الدولة'] + "')")
      .append('div')
        .text((d) => d['اسم الدولة'])
        .attr('class', 'text-center absolute top-[45%] w-full text-white font-bold text-2xl');
    
    selectedDiv.append('div')
      .attr('class', 'md:hidden w-full h-full rounded-xl text-center bg-gray-500 max-h-8 font-bold text-white')
      .attr('onclick', (d) => "dialogShow('" + d['اسم الدولة'] + "')")
      .text((d) => d['اسم الدولة'])
  }
});
