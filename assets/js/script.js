
const sList = ['api', 'aws', 'beautifulSoup', 'bootstrap', 'colab', 'css', 'd3', 'dashboarding', 'dataStructure', 'dba', 'etl', 'flask', 'geomapping', 'git', 'github', 'googleMaps', 'heroku', 'html', 'javaScript', 'jupyter', 'leaflet', 'machineLearning', 'matplolib', 'mongo', 'mysql', 'numpy', 'pandas', 'postgresSQL', 'pyspark', 'python', 'requests', 'splinter', 'tableau']

const sLinks = [
    "https://en.wikipedia.org/wiki/API",
    "https://en.wikipedia.org/wiki/Amazon_Web_Services",
    "https://en.wikipedia.org/wiki/Beautiful_Soup_(HTML_parser)",
    "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
    "https://en.wikipedia.org/wiki/Colab",
    "https://en.wikipedia.org/wiki/CSS",
    "https://en.wikipedia.org/wiki/D3.js",
    "https://en.wikipedia.org/wiki/Dashboard_(business)",
    "https://en.wikipedia.org/wiki/Data_structure",
    "https://en.wikipedia.org/wiki/Database_administrator",
    "https://en.wikipedia.org/wiki/Extract,_transform,_load",
    "https://en.wikipedia.org/wiki/Flask_(web_framework)",
    "https://en.wikipedia.org/wiki/Geographic_information_system",
    "https://en.wikipedia.org/wiki/Git",
    "https://en.wikipedia.org/wiki/GitHub",
    "https://en.wikipedia.org/wiki/Google_Maps",
    "https://en.wikipedia.org/wiki/Heroku",
    "https://en.wikipedia.org/wiki/HTML",
    "https://en.wikipedia.org/wiki/JavaScript",
    "https://en.wikipedia.org/wiki/Project_Jupyter",
    "https://en.wikipedia.org/wiki/Leaflet_(software)",
    "https://en.wikipedia.org/wiki/Machine_learning",
    "https://en.wikipedia.org/wiki/Matplotlib",
    "https://en.wikipedia.org/wiki/MongoDB",
    "https://en.wikipedia.org/wiki/MySQL",
    "https://en.wikipedia.org/wiki/NumPy",
    "https://en.wikipedia.org/wiki/Pandas_(software)",
    "https://en.wikipedia.org/wiki/PostgreSQL",
    "https://en.wikipedia.org/wiki/Apache_Spark",
    "https://en.wikipedia.org/wiki/Python_(programming_language)",
    "https://en.wikipedia.org/wiki/Requests_(software)",
    "https://splinter.readthedocs.io/en/latest/",
    "https://en.wikipedia.org/wiki/Tableau_Software"
]

sList.forEach((skill, i) => {
    skills.innerHTML += `
    <a href='${sLinks[i]}' target='blank_'>
        <figure>
            <figcaption>${skill.toUpperCase()}</figcaption>
            <img src="assets/images/icons/${skill}.png">
        </figure>
    </a>
    `;
});

const apps = [

{
    img: "python.png",
    name: "Python Scripting",
    info: "This project demonstrates various Python scripting techniques, including automation, data manipulation, and file handling.",
    website: "",
    github: "https://github.com/44Jacob/Python-Scripting"
},
{
    img: "portfolio.png",
    name: "Portfolio",
    info: "This is my personal portfolio showcasing all my projects, work experience, and skills in data analysis and software development.",
    website: "https://github.com/44Jacob/Portfolio",
    github: "https://github.com/44Jacob/Portfolio"
},
{
    img: "dashboard.png",
    name: "Biodiversity Dashboard",
    info: "Interactive dashboard providing insights into biodiversity datasets, helping visualize trends in wildlife populations over time.",
    website: "https://github.com/44Jacob/Biodiversity-Dashboard",
    github: "https://github.com/44Jacob/Biodiversity-Dashboard"
},
{
    img: "earthquakes.png",
    name: "Earthquake Analysis",
    info: "Application provides the magnitude, radius, depth, location, and time of the most recent earthquakes.",
    website: "https://44jacob.github.io/Earthquake_Analysis/",
    github: "https://github.com/44Jacob/Earthquake_Analysis"
},
{
    img: "buy-sell.png",
    name: "Buy or Sell Project",
    info: "An application that helps users make informed decisions on whether to buy or sell based on financial data analysis.",
    website: "https://github.com/44Jacob/Buy_Or_Sell_Project",
    github: "https://github.com/44Jacob/Buy_Or_Sell_Project"
},
{
    img: "fin-tech-analysis.png",
    name: "Financial Data Tech Analysis",
    info: "Analysis of various financial datasets using data science techniques to gain insights into stock performance.",
    website: "https://github.com/44Jacob/FinDataTechAnalysis",
    github: "https://github.com/44Jacob/FinDataTechAnalysis"
},
{
    img: "stock-price-predictions.png",
    name: "Stock Price Prediction",
    info: "Machine learning model that predicts future stock prices based on historical data and various financial indicators.",
    website: "https://github.com/44Jacob/Stock-Price-Prediction",
    github: "https://github.com/44Jacob/Stock-Price-Prediction"
},
{
    img: "sqlalchemy-weather.png",
    name: "SQLAlchemy Weather Analysis",
    info: "A weather data analysis project that uses SQLAlchemy to query and analyze weather information stored in databases.",
    website: "https://github.com/44Jacob/SQLAlchemy-Weather-Analysis",
    github: "https://github.com/44Jacob/SQLAlchemy-Weather-Analysis"
},
{
    img: "weather-api.png",
    name: "Weather API Analysis",
    info: "An API-based project that retrieves and analyzes real-time weather data, providing insights into temperature trends and anomalies.",
    website: "https://github.com/44Jacob/Weather-API-Analysis",
    github: "https://github.com/44Jacob/Weather-API-Analysis"
}
];


apps.forEach(({img,name,info,website,github}) => {
    applications.innerHTML += `
    
        <div class="app">
                <img src="assets/images/apps/${img}" alt="">
                <div class="info">
                    <h3>${name}</h3>
                    <p>${info}</p>
                    <div>
                    ${website=='' ? '' : `
                        <a href='${website}' target='blank_'>
                            <figure>
                                <img src="assets/images/icons/www.png" alt="website">
                                <figcaption style='color:white'>Website</figcaption>
                            </figure>
                        </a>
                    `}
                    <a href='${github}' target='blank_'>
                        <figure>
                            <img src="assets/images/icons/github.png" alt="github">
                            <figcaption style='color:white'>Github</figcation>
                        </figure>
                    </a>
                    </div>
                </div>
            </div>
    `;
});

