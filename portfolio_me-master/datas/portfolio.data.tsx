export interface PortfolioInterface {
    icon: string;
    title: string;
    description: string;
}

const portfolioData: PortfolioInterface[] = [
    {
        title: 'IT Support & Service Desk',
        icon: 'helpdesk.png',
        description: 'I provide Tier 1/2 technical support across Windows 10/11 environments, resolving hardware, software, and connectivity issues through ticketing systems (ServiceNow, Jira, Freshdesk) while maintaining SLA compliance and high first-call resolution rates.'
    },
    {
        title: 'Backend & API Development',
        icon: 'api.png',
        description: 'I have worked in the backend development of projects like Real Time Dashboards,CMS, Plugins, PWA, TopUp payment gateways, Restful/GraphQL API development, event driven applications and 3rd party API integration with knowledge of Web servers like Apache and Nginx and scalability tools like Redis and RabbitMQ.'
    },
    {
        title: 'Systems & Network Administration',
        icon: 'servers.png',
        description: 'I manage Active Directory, Azure AD (Entra ID), Group Policy, and Microsoft 365 administration, alongside hands-on troubleshooting of TCP/IP, DNS, DHCP, VPN, and Wi-Fi connectivity across multi-user environments.'
    },
    {
        title: 'Endpoint & Device Management',
        icon: 'endpoint.png',
        description: 'I handle device imaging, workstation provisioning, hardware diagnostics, and mobile device configuration using tools like Intune, alongside onboarding/offboarding and preventative maintenance to minimize downtime.'
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