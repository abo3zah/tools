let data, xAxis, yAxis, AImodel, uniqueClass, messageSize;

function preload() {
     //download Data
     data = loadTable('https://raw.githubusercontent.com/curran/data/gh-pages/all/iris_iris.csv', 'csv', 'header');
}

async function setup() {
     noCanvas()
     noLoop()

     messageSize = 0;

     //unhide the main div
     select('#main').addClass('grid')
     select('#main').removeClass('hidden')

     //append data to dropdown
     xAxis = select('#x-axis')
     yAxis = select('#y-axis')

     for (col of data.columns) {
          if (col == 'Class') {
               continue;
          }
          xAxis.option(col);
          yAxis.option(col);
     }

     //select columns
     xAxis.selected('Petal Length');
     yAxis.selected('Petal Width');

     //plot grapgh
     await preparingForPloting();

     //add events
     xAxis.changed(preparingForPloting);
     yAxis.changed(preparingForPloting);


     //creating the model
     await createModel()

     //train model
     trainmodel()

     generateRandomValues();

     predictType()

}

function generateRandomValues() {
     let PL = round(random(0,7),2);
     select('#PL').value(PL);

     let PW = round(random(0,3),2);
     select('#PW').value(PW);
}

async function preparingForPloting(predictedValue = undefined) {

     tf.tidy(() => {
          //extract unique classes
          uniqueClass = tf.unique(data.getColumn('Class')).values.arraySync();

          //prepare the data to plot
          let values = [];
          for (let index = 0; index < uniqueClass.length; index++) {
               let RegEx = new RegExp(uniqueClass[index], 'g')
               values[index] = {
                    x: data.matchRows(RegEx, 4).map(d => d.getNum(xAxis.value())),
                    y: data.matchRows(RegEx, 4).map(d => d.getNum(yAxis.value())),
                    mode: "markers",
                    name: uniqueClass[index],
                    type: 'scatter',
               };
          }

          if (predictedValue != undefined){
               values.push(predictedValue)
          }

          // Define Layout
          var layout = {
               xaxis: {
                    title: xAxis.value()
               },
               yaxis: {
                    title: yAxis.value()
               },
               title: {
                    text: xAxis.value() + " vs. " + yAxis.value(),
                    font: {
                         size: 30
                    }
               },
               paper_bgcolor: "#fffbeb",
               plot_bgcolor: "#fffbeb"
          };


          //toggle options based on selections
          toggleStatusForOptions()

          //plot grapgh
          plotGrapgh("myChart", values, layout)
     })
}

function plotGrapgh(containerID, values, layout) {

     // Display using Plotly
     Plotly.newPlot(containerID, values, layout, {
          displaylogo: false,
          staticPlot: false,
          responsive: true
     });

     // trainmodel()
}

function toggleStatusForOptions() {
     for (option of selectAll('select[name*="-axis"] option')) {
          if (option.value() == xAxis.value()) {
               yAxis.disable(option.value())
          } else if (option.value() == yAxis.value()) {
               xAxis.disable(option.value())
          } else {
               option.removeAttribute('disabled')
          }
     }
}

async function createModel() {
     tf.tidy(async () => {
          //create a model
          AImodel = tf.sequential();

          //add input layer
          AImodel.add(tf.layers.dense({
               inputShape: [2],
               //alternatives for activation are 'elu'|'hardSigmoid'|'linear'|'relu'|'relu6'| 'selu'|'sigmoid'|'softmax'|'softplus'|'softsign'|'tanh'|'swish'|'mish'
               activation: "sigmoid",
               units: 5,
               name: "Input_Layer",
               //dtype: 'float32',//'float32'|'int32'|'bool'|'complex64'|'string'
          }));

          //add hidden layers
          AImodel.add(tf.layers.dense({
               units: 20,
               name: "First_Hidden_Layer"
          }))
          AImodel.add(tf.layers.dense({
               units: 20,
               name: "Second_Hidden_Layer"
          }))

          //add output layers
          AImodel.add(tf.layers.dense({
               units: 3,
               name: "Output_Layer"
          }))

          //Prepare the model for tarining
          await complieModel();

          //Print a summary of the model
          AImodel.summary()
     })
}

async function trainmodel(epochs = 50) {

     //creating the xs
     x = tf.tidy(() => tf.tensor2d(data.getRows().map(d => [d.getNum(xAxis.value()), d.getNum(yAxis.value())])))

     //creating and encoding the ys
     y = tf.tidy(() => tf.oneHot(tf.tensor1d(data.getColumn('Class').map(d => uniqueClass.indexOf(d)), 'int32'), uniqueClass.length))

     //printing the input and output shape
     // print(x.shape, y.shape)

     // Define Layout
     var layout = {
          xaxis: {
               title: 'epochs'
          },
          yaxis: {
               title: 'Loss'
          },
          title: {
               text: "epochs vs. Loss",
               font: {
                    size: 30
               }
          },
          paper_bgcolor: "#fffbeb",
          plot_bgcolor: "#fffbeb"
     };

     let xs = [];
     let ys = [];
     let values = [];

     await tf.tidy(() => {
          AImodel.fit(x, y, {
               epochs,
               shuffle: true,
               validationSplit: 0.1,
               callbacks: {
                    onEpochEnd: async (epoch, logs) => {
                         xs.push(epoch);
                         ys.push(logs.loss)
                         values = [{
                              x: xs,
                              y: ys,
                              type: 'scatter'
                         }];
                         plotGrapgh("myChart2", values, layout)
                    }
               }
          });
     })
}

function showMessage(message = 'hello'){

     let div = createDiv(message);
     div.parent('alertsContainer');
     div.addClass('bg-red-400 text-white font-bold block m-3 rounded');
     div.center();
     
     div.position(0, 0+messageSize,'static');

     messageSize += div.height + 10
     setTimeout(() => {
          messageSize -= div.height
          div.remove()
     }, 5000);
}

async function loadModelFiles() {

     let jsonUpload = select('#json-upload').elt.files;
     let weightsUpload = select('#weights-upload').elt.files;

     if (jsonUpload.length == 0 || weightsUpload.length == 0) {
          showMessage('No files');
          return null
     }

     AImodel = await tf.loadLayersModel(
          tf.io.browserFiles([jsonUpload[0], weightsUpload[0]])
     );

     AImodel.summary();

     complieModel();
}

async function complieModel() {
     //Prepare the model for tarining
     AImodel.compile({
          //alternatives for loss are absoluteDifference, computeWeightedLoss, cosineDistance, hingeLoss, huberLoss, 
          //logLoss, meanSquaredError, sigmoidCrossEntropy, softmaxCrossEntropy, categoricalCrossentropy
          loss: "meanSquaredError",
          //alternatives for optimizer are tf.train.sgd, tf.train.momentum, tf.train.adagrad, tf.train.adadelta, tf.train.adam, tf.train.adamax, tf.train.rmsprop
          optimizer: tf.train.adam(.05),
          //alternative for metrics are 
          metrics: ['acc']
     });
}

async function predictType() {

     PL = +select('#PL').value();
     PW = +select('#PW').value();

     arr = [[PL, PW]]

     select('#PLValue').html(PL)
     select('#PWValue').html(PW)

     preparingForPloting({
          x: [PL],
          y: [PW],
          mode: "markers",
          name: 'Predicted Flower',
          type: 'scatter',
          marker:{
               size:10
          },
     })

     tf.tidy(() => {

          let yPred = tf.tensor2d(arr);

          let result = AImodel.predict(yPred).argMax(1).arraySync()[0];

          document.getElementById('result').innerText = uniqueClass[result]
     })

     generateRandomValues();
}

async function saveModelFiles() {
     //save model
    await AImodel.save('downloads://IRIS');
}