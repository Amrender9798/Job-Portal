export let Jobs = [
  { id: 1, company: "ABC Corporation", role: "Software Engineer", location: "City A", package: "$80,000 - $100,000", skills: ["JavaScript", "React", "Node.js"] },
  { id: 2, company: "XYZ Tech", role: "Data Scientist", location: "City B", package: "$90,000 - $120,000", skills: ["Python", "Machine Learning"] },
  { id: 3, company: "Tech Innovators", role: "UX/UI Designer", location: "City C", package: "$70,000 - $90,000", skills: ["UI/UX Design", "Adobe XD"] },
  { id: 4, company: "Tech Innovations Ltd.", role: "Full Stack Developer", location: "City D", package: "$85,000 - $110,000", skills: ["JavaScript", "React", "Node.js"] },
  { id: 5, company: "Data Insights Inc.", role: "Data Engineer", location: "City E", package: "$95,000 - $120,000", skills: ["Python", "SQL", "Big Data", "ETL"] },
  { id: 6, company: "E-commerce Solutions", role: "Digital Marketing", location: "City F", package: "$75,000 - $95,000", skills: ["SEO", "SEM", "Social Media"] },
  { id: 7, company: "Cloud Innovators", role: "Cloud Solutions Architect", location: "City G", package: "$100,000 - $130,000", skills: ["AWS", "Azure", "DevOps"] },
  { id: 8, company: "HealthTech Solutions", role: "Healthcare Data Analyst", location: "City H", package: "$90,000 - $115,000", skills: ["Data Analysis", "Python"] },
  { id: 9, company: "Tech Solutions LLC", role: "Backend Developer", location: "City I", package: "$85,000 - $105,000", skills: ["Java", "Spring Boot", "MySQL"] },
  { id: 10, company: "Innovative Labs", role: "ML Engineer", location: "City J", package: "$100,000 - $120,000", skills: ["Machine Learning", "TensorFlow"] },
  { id: 11, company: "Web Design Experts", role: "Frontend Developer", location: "City K", package: "$80,000 - $100,000", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { id: 12, company: "Data Analytics Inc.", role: "Data Scientist", location: "City L", package: "$95,000 - $115,000", skills: ["Python", "Data Visualization", "SQL"] },
];


export function add(newJob) {
  newJob.skills = newJob.skills.split(",").map((skill) => skill.trim())
  Jobs.push(newJob);
}

// Function to remove a job by ID
export function removeJob(jobId) {
  Jobs = Jobs.filter((job) => job.id !== jobId);
}

// Function to update a job by ID
export function update(updatedJob) {
  updatedJob.skills = updatedJob.skills.split(",").map((skill) => skill.trim());
  Jobs = Jobs.map((job) => {
    if (job.id == updatedJob.id) {
      return updatedJob;
    }
    return job;
  });
}

export function findJobById(jobId) {
  return Jobs.find((job) => job.id == jobId);
}

export function deleteJobById(jobId) {
  Jobs = Jobs.filter((job) => job.id != jobId);
}
