// Core data model: Azure services
const services = [
  {
    name: "Azure Cloud",
    category: "Platform",
    description:
      "Microsoft's cloud computing platform, offering services for computing, analytics, storage, and networking.",
    tags: ["Compute", "Storage", "Networking", "Analytics", "Platform"]
  },
  {
    name: "Azure Virtual Machines",
    category: "Compute",
    description:
      "Infrastructure as a Service (IaaS) offering that lets you create and manage virtual machines in the cloud.",
    tags: ["IaaS", "Linux", "Windows", "Scalability"]
  },
  {
    name: "Azure App Service",
    category: "Compute",
    description:
      "Platform as a Service (PaaS) for building, deploying, and scaling web apps and APIs.",
    tags: ["PaaS", "Web Apps", "APIs", "Autoscale"]
  },
  {
    name: "Azure Functions",
    category: "Compute",
    description:
      "Serverless compute service that runs event-triggered code without provisioning or managing servers.",
    tags: ["Serverless", "Events", "Pay-per-use"]
  },
  {
    name: "Azure Blob Storage",
    category: "Storage",
    description:
      "Object storage for large amounts of unstructured data such as text and binary data.",
    tags: ["Object Storage", "Unstructured Data", "Backup"]
  },
  {
    name: "Azure SQL Database",
    category: "Data",
    description:
      "Fully managed relational database service compatible with SQL Server in the cloud.",
    tags: ["Relational", "Managed", "High Availability"]
  },
  {
    name: "Azure Cosmos DB",
    category: "Data",
    description:
      "Globally distributed, multi-model database service for highly responsive and scalable applications.",
    tags: ["NoSQL", "Global Distribution", "Low Latency"]
  },
  {
    name: "Azure Active Directory (AAD)",
    category: "Identity",
    description:
      "Identity and access management service for controlling access to resources in Azure and beyond.",
    tags: ["SSO", "MFA", "Identity", "Access Control"]
  },
  {
    name: "Azure DevOps",
    category: "DevOps",
    description:
      "A set of modern DevOps tools for planning, developing, testing, and deploying applications.",
    tags: ["Boards", "Repos", "Pipelines", "DevOps"]
  },
  {
    name: "Azure DevOps Pipelines",
    category: "DevOps",
    description:
      "CI/CD service for automating build, test, and deployment of applications.",
    tags: ["CI/CD", "Automation", "DevOps"]
  },
  {
    name: "Azure Kubernetes Service (AKS)",
    category: "Containers",
    description:
      "Managed Kubernetes service for deploying, managing, and scaling containerized applications.",
    tags: ["Kubernetes", "Containers", "Orchestration"]
  },
  {
    name: "Azure Cognitive Services",
    category: "AI",
    description:
      "Collection of AI services for vision, speech, language, and decision-making APIs.",
    tags: ["AI", "Vision", "Speech", "Language"]
  },
  {
    name: "Azure Virtual Network",
    category: "Networking",
    description:
      "Networking service that securely connects Azure resources and on-premises networks.",
    tags: ["VNet", "VPN", "Subnets"]
  },
  {
    name: "Azure Security Center",
    category: "Security",
    description:
      "Unified security management and threat protection across hybrid cloud workloads.",
    tags: ["Threat Protection", "Security Posture"]
  },
  {
    name: "Azure Monitor",
    category: "Management",
    description:
      "Monitoring service for collecting, analyzing, and acting on telemetry from Azure resources.",
    tags: ["Metrics", "Logs", "Alerts"]
  },
  {
    name: "Azure Resource Manager (ARM)",
    category: "Management",
    description:
      "Deployment and management service that organizes resources into resource groups and templates.",
    tags: ["Templates", "IaC", "Resource Groups"]
  },
  {
    name: "Azure Data Factory",
    category: "Data Integration",
    description:
      "Hybrid data integration service for creating, scheduling, and orchestrating data pipelines.",
    tags: ["ETL", "Pipelines", "Data Integration"]
  },
  {
    name: "Azure Load Balancer",
    category: "Networking",
    description:
      "Layer-4 load balancing service for distributing incoming traffic across multiple VMs or services.",
    tags: ["Load Balancing", "High Availability"]
  },
  {
    name: "Azure Logic Apps",
    category: "Integration",
    description:
      "Workflow automation service for integrating apps, data, and services across environments.",
    tags: ["Workflows", "Integration", "Low-code"]
  },
  {
    name: "Azure Site Recovery",
    category: "Business Continuity",
    description:
      "Disaster recovery service that replicates and fails over workloads to Azure.",
    tags: ["DR", "Failover", "BCDR"]
  },
  {
    name: "Azure Backup",
    category: "Business Continuity",
    description:
      "Cloud-based backup service for protecting data and applications on-premises and in Azure.",
    tags: ["Backup", "Recovery", "Protection"]
  },
  {
    name: "Azure Data Lake Storage",
    category: "Data",
    description:
      "Scalable and secure data lake storage for big data analytics workloads.",
    tags: ["Big Data", "Data Lake", "Analytics"]
  },
  {
    name: "Azure Key Vault",
    category: "Security",
    description:
      "Securely stores and manages keys, secrets, and certificates.",
    tags: ["Secrets", "Keys", "Certificates"]
  },
  {
    name: "Azure Databricks",
    category: "Analytics",
    description:
      "Unified analytics platform based on Apache Spark for big data and AI.",
    tags: ["Spark", "Notebooks", "Analytics"]
  },
  {
    name: "Azure IoT Hub",
    category: "IoT",
    description:
      "Managed service for bi-directional communication between IoT devices and the cloud.",
    tags: ["IoT", "Devices", "Messaging"]
  },
  {
    name: "Azure Container Registry",
    category: "Containers",
    description:
      "Private registry for storing and managing container images for AKS and other deployments.",
    tags: ["Registry", "Containers", "Images"]
  },
  {
    name: "Azure Firewall",
    category: "Security",
    description:
      "Managed, cloud-based network security service protecting Azure Virtual Network resources.",
    tags: ["Firewall", "Network Security"]
  },
  {
    name: "Azure Bastion",
    category: "Security",
    description:
      "Provides secure RDP and SSH access to VMs directly through the Azure portal.",
    tags: ["RDP", "SSH", "Jump Host"]
  },
  {
    name: "Azure Arc",
    category: "Hybrid",
    description:
      "Extends Azure services and management to any infrastructure, on-premises or other clouds.",
    tags: ["Hybrid", "Multi-cloud", "Management"]
  },
  {
    name: "Azure CDN",
    category: "Networking",
    description:
      "Content Delivery Network for delivering high-bandwidth content with low latency.",
    tags: ["CDN", "Caching", "Performance"]
  },
  {
    name: "Azure Storage Explorer",
    category: "Tools",
    description:
      "GUI tool for managing and interacting with Azure Storage resources.",
    tags: ["GUI", "Storage", "Developer Tool"]
  },
  {
    name: "Azure CLI",
    category: "Tools",
    description:
      "Command-line interface for managing Azure resources via scripts and commands.",
    tags: ["CLI", "Automation", "Scripting"]
  },
  {
    name: "Azure PowerShell",
    category: "Tools",
    description:
      "PowerShell module for managing Azure resources using PowerShell scripts.",
    tags: ["PowerShell", "Automation", "Scripting"]
  },
  {
    name: "Azure Advisor",
    category: "Management",
    description:
      "Provides recommendations to optimize performance, reliability, security, and cost.",
    tags: ["Recommendations", "Cost", "Best Practices"]
  },
  {
    name: "Azure Policy",
    category: "Governance",
    description:
      "Service for enforcing and governing compliance with organizational standards.",
    tags: ["Compliance", "Governance", "Policies"]
  },
  {
    name: "Azure Sphere",
    category: "IoT",
    description:
      "End-to-end IoT security solution including hardware, OS, and cloud services.",
    tags: ["IoT", "Security", "MCU"]
  },
  {
    name: "Azure Data Lake Analytics",
    category: "Analytics",
    description:
      "Distributed analytics service for big data processing and analytics.",
    tags: ["Big Data", "U-SQL", "Analytics"]
  },
  {
    name: "Azure Queue Storage",
    category: "Messaging",
    description:
      "Managed message-queuing service for decoupling applications and services.",
    tags: ["Queues", "Messaging", "Decoupling"]
  },
  {
    name: "Azure Data Explorer",
    category: "Analytics",
    description:
      "Fast and highly scalable data exploration service for real-time analytics.",
    tags: ["Kusto", "Logs", "Real-time"]
  },
  {
    name: "Azure Service Bus",
    category: "Messaging",
    description:
      "Enterprise message broker for connecting applications, services, and devices.",
    tags: ["Queues", "Topics", "Messaging"]
  },
  {
    name: "Azure Redis Cache",
    category: "Data",
    description:
      "Managed, high-performance, in-memory data store based on Redis.",
    tags: ["Cache", "In-memory", "Performance"]
  },
  {
    name: "Azure Application Gateway",
    category: "Networking",
    description:
      "Application delivery controller with Layer-7 load balancing and WAF capabilities.",
    tags: ["Layer 7", "WAF", "Load Balancing"]
  },
  {
    name: "Azure Time Series Insights",
    category: "Analytics",
    description:
      "Managed analytics service for real-time IoT time-series data visualization and analysis.",
    tags: ["IoT", "Time Series", "Visualization"]
  },
  {
    name: "Azure Machine Learning",
    category: "AI",
    description:
      "Cloud-based service for building, training, and deploying machine learning models.",
    tags: ["ML", "MLOps", "Notebooks"]
  },
  {
    name: "Azure Data Share",
    category: "Data",
    description:
      "Service for securely sharing data between organizations and external partners.",
    tags: ["Data Sharing", "Collaboration"]
  },
  {
    name: "Azure File Storage",
    category: "Storage",
    description:
      "Managed file shares in the cloud accessible via SMB protocol.",
    tags: ["File Shares", "SMB", "Lift-and-shift"]
  }
];

// DOM references
const cardsView = document.getElementById("cardsView");
const listView = document.getElementById("listView");
const listBody = document.getElementById("listBody");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const categoryList = document.getElementById("categoryList");
const statusText = document.getElementById("statusText");
const pills = document.querySelectorAll(".pill");

const selectedServiceName = document.getElementById("selectedServiceName");
const selectedServiceCategory = document.getElementById(
  "selectedServiceCategory"
);
const detailsName = document.getElementById("detailsName");
const detailsCategory = document.getElementById("detailsCategory");
const detailsDescription = document.getElementById("detailsDescription");
const detailsTags = document.getElementById("detailsTags");
const detailsPanel = document.getElementById("detailsPanel");

let currentView = "cards";
let currentCategory = "all";
let currentSearch = "";

// Build category list and filter options
function initCategories() {
  const categories = Array.from(
    new Set(services.map((s) => s.category))
  ).sort();

  // Dropdown
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });

  // Sidebar list
  const allItem = document.createElement("li");
  allItem.textContent = "All services";
  allItem.dataset.category = "all";
  allItem.classList.add("active");
  categoryList.appendChild(allItem);

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat;
    li.dataset.category = cat;
    categoryList.appendChild(li);
  });

  categoryList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    currentCategory = li.dataset.category;
    categoryFilter.value = currentCategory === "all" ? "all" : currentCategory;
    updateCategoryActive();
    render();
  });

  categoryFilter.addEventListener("change", () => {
    currentCategory = categoryFilter.value;
    updateCategoryActive();
    render();
  });
}

function updateCategoryActive() {
  categoryList.querySelectorAll("li").forEach((li) => {
    li.classList.toggle("active", li.dataset.category === currentCategory);
  });
}

// Filtered services
function getFilteredServices() {
  return services.filter((s) => {
    const matchesCategory =
      currentCategory === "all" || s.category === currentCategory;
    const text = (s.name + " " + s.description + " " + s.category).toLowerCase();
    const matchesSearch = text.includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

// Render cards
function renderCards() {
  cardsView.innerHTML = "";
  const filtered = getFilteredServices();

  filtered.forEach((service) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.name = service.name;

    card.innerHTML = `
      <div class="card-title">${service.name}</div>
      <div class="card-category">${service.category}</div>
      <div class="card-desc">${service.description}</div>
    `;

    card.addEventListener("click", () => {
      selectService(service);
    });

    cardsView.appendChild(card);
  });

  statusText.textContent = `${filtered.length} service(s) shown in card view.`;
}

// Render list
function renderList() {
  listBody.innerHTML = "";
  const filtered = getFilteredServices();

  filtered.forEach((service) => {
    const tr = document.createElement("tr");
    tr.dataset.name = service.name;
    tr.innerHTML = `
      <td>${service.name}</td>
      <td>${service.category}</td>
      <td>${service.description}</td>
    `;
    tr.addEventListener("click", () => {
      selectService(service);
    });
    listBody.appendChild(tr);
  });

  statusText.textContent = `${filtered.length} service(s) shown in list view.`;
}

// Select a service and update details panel
function selectService(service) {
  selectedServiceName.textContent = service.name;
  selectedServiceCategory.textContent = service.category;
  detailsName.textContent = service.name;
  detailsCategory.textContent = service.category;
  detailsDescription.textContent = service.description;

  detailsTags.innerHTML = "";
  service.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    detailsTags.appendChild(span);
  });

  statusText.textContent = `Selected: ${service.name}`;
}

// Render based on current view
function render() {
  if (currentView === "cards") {
    cardsView.classList.remove("hidden");
    listView.classList.add("hidden");
    renderCards();
  } else {
    cardsView.classList.add("hidden");
    listView.classList.remove("hidden");
    renderList();
  }
}

// Search
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  render();
});

// View toggle
pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    pills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    currentView = pill.dataset.view;
    render();
  });
});

// Initial setup
initCategories();
render();
// Preselect first service
if (services.length > 0) {
  selectService(services[0]);
}
