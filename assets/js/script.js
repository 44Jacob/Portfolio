
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
        <figure>
            <a href='${sLinks[i]}' target='blank_'>
                        <figcaption>${skill.toUpperCase()}</figcaption>
                        <img src="assets/images/${skill}.png">
            </a>
        </figure>
    `;
});