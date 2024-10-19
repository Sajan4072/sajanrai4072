export interface PortfolioInterface {
    icon: string;
    title: string;
    description: string;
}

const portfolioData: PortfolioInterface[] = [
    {
        title: 'FrontEnd Development',
        icon: 'front-end.png',
        description: 'I am familiar with forntend technologies such as HTML, CSS and Modern javascript frameworks like React  '
    },
    {
        title: 'Backend & API Development',
        icon: 'api.png',
        description: 'I have worked in the backend development of projects like Real Time Dashboards,CMS, Plugins, PWA, TopUp payment gateways, Restful/GraphQL API development, event driven applications and 3rd party API integration with knowledge of Web servers like Apache and Nginx and scalability tools like Redis and RabbitMQ.'
    },
    {
        title: 'DevOps',
        icon: 'servers.png',
        description: 'I have experience in setting up CI/CD pipelines using Jenkins,gitlab CICD and GitHub Actions. I am skilled in Infrastructure as Code (IaC) tools like Terraform, with ansible for configuration management. I have worked with containerization technologies like Docker and orchestration tools such as Kubernetes.'
    },
    {
        title: 'Databases and Data Modeling',
        icon: 'database.png',
        description: 'Proficiency in different relational and NoSQL databases, ORMs and understanding of database design'
    },
    {
        title: 'Cloud Platforms',
        icon: 'query.png',
        description: 'I have extensive experience with various cloud platforms such as Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.'
    },
    {
        title: 'Algorithm Solving',
        icon: 'algorithm.png',
        description: 'Solving a wide range of algorithmic problems to improve skills, with a focus on optimizing solutions and analyzing time and space complexity.'
    },

]
export default portfolioData;