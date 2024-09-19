
const sList = ['api','aws','beautifulSoup','bootstrap','colab','css','d3','dashboarding','dataStructure','dba','etl','flask','geomapping','git','github','googleMaps','heroku','html','javaScript','jupyter','leaflet','machineLearning','matplolib','mongo','mysql','numpy','pandas','postgresSQL','pyspark','python','requests','splinter','tableau']

sList.forEach( skill => {
    skills.innerHTML += `
        <figure>
            <figcaption>${skill.toUpperCase()}</figcaption>
            <img src="assets/images/${skill}.png">
        </figure>
    `;
});