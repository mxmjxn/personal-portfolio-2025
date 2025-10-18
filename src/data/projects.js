// Project data structure for Maxim Jackson's portfolio
export const projects = [
  {
    id: 'project1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with modern web technologies, featuring user authentication, product catalog, shopping cart functionality, and secure payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT'],
    features: [
      'User registration and authentication system',
      'Dynamic product catalog with search and filtering',
      'Shopping cart with persistent storage',
      'Secure payment processing with Stripe integration',
      'Admin dashboard for product management',
      'Responsive design for all device types'
    ],
    images: [
      'assets/images/ecommerce-homepage.jpg',
      'assets/images/ecommerce-product-page.jpg',
      'assets/images/ecommerce-cart.jpg'
    ],
    liveUrl: 'https://ecommerce-demo.maximjackson.dev',
    githubUrl: 'https://github.com/maximjackson/ecommerce-platform',
    status: 'completed',
    completionDate: '2024-08'
  },
  {
    id: 'project2',
    title: 'Task Management Application',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'CSS Grid', 'WebSocket', 'PWA'],
    features: [
      'Real-time collaborative task editing',
      'Project timeline and milestone tracking',
      'Team member assignment and notifications',
      'Drag-and-drop task organization',
      'Progressive Web App with offline functionality',
      'Advanced filtering and search capabilities'
    ],
    images: [
      'assets/images/taskapp-dashboard.jpg',
      'assets/images/taskapp-project-view.jpg',
      'assets/images/taskapp-team-collaboration.jpg'
    ],
    liveUrl: 'https://taskmanager.maximjackson.dev',
    githubUrl: 'https://github.com/maximjackson/task-management-app',
    status: 'completed',
    completionDate: '2024-06'
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projects;
};
